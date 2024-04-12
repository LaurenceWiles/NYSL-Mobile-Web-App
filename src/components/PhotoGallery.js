import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { storage, auth } from "./firebase";
import { ref, uploadBytes, getDownloadURL, listAll, getMetadata } from "firebase/storage";
import { Container, Form, Button, Image, Alert, Card } from "react-bootstrap";



export const PhotoGallery = () => {

    const { gameId } = useParams();
    const [selectedImage, setSelectedImage] = useState(null);
    const [uploading, setUploading] = useState(false);
    const [error, setError] = useState(null);
    const [images, setImages] = useState([]);
    const [user, setUser] = useState(null);

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            if (user) {
                setUser(user);
            } else {
                setUser(null);
            }
        });

        return () => unsubscribe();
    }, []);

    useEffect(() => {
        const fetchImages = async () => {
            try {
                const imageRefs = await listAll(ref(storage, `pictures/${gameId}`));
                const urlsPromises = imageRefs.items.map(async (itemRef) => {
                    const url = await getDownloadURL(itemRef);
                    const metadata = await getMetadata(itemRef);
                    return { url, metadata };
                });
                const urls = await Promise.all(urlsPromises);
                urls.sort((a, b) => {
                    return b.metadata.timeCreated - a.metadata.timeCreated;
                });
                setImages(urls);
            } catch (error) {
                console.error("Error fetching images:", error);
                setError("Error fetching images. Please try again."); 
            }
        };
        fetchImages();
    }, [gameId]);

    const handleFileSelect = (event) => {
     const selectedFile = event.target.files[0];
        if (selectedFile) {
            setSelectedImage(selectedFile);
            setError(null);
        }
    };

    const handleUpload = async () => {
        if (selectedImage && user) {
            setUploading(true);
            const gameRef = ref(storage, `pictures/${gameId}/${selectedImage.name}`); 
            try {
                const metadata = {
                    customMetadata: {
                        user: user.email, 
                    }
                };
                await uploadBytes(gameRef, selectedImage, metadata);
                console.log("File uploaded successfully");
                const newImageUrl = await getDownloadURL(gameRef);
                const newImageMetadata = await getMetadata(gameRef);
                setImages([...images, { url: newImageUrl, metadata: newImageMetadata }]);
                setSelectedImage(null);
            } catch (error) {
                console.error("Error uploading file:", error);
                setError("Error uploading file. Please try again.");
            }
            setUploading(false);
        }
    };

    return (
        <Container>
            <h1 className="mt-5">Photo Gallery</h1>
            <Form.Group controlId="formFile" className="mb-3">
        <Form.Control 
          type="file" 
          accept="image/*" 
          capture="environment" 
          onChange={handleFileSelect}
        />
      </Form.Group>
            {selectedImage && (
                <div className="mt-3">
                    <h2>Selected Image:</h2>
                    <Image src={URL.createObjectURL(selectedImage)} alt="Selected" fluid />
                </div>
            )}
            {error && (
                <Alert variant="danger" className="mt-3">
                    {error}
                </Alert>
            )}
        <Button 
        variant="primary" 
        onClick={handleUpload} 
        disabled={!selectedImage || uploading}
        className="mt-3"
      >
        {uploading ? "Uploading..." : "Post"}
        </Button>
        <h2 className="mt-5">Uploaded Pictures</h2>
            <div className="d-flex flex-wrap">
                {images.map((image, index) => (
                    <Card key={index} className="m-2" style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={image.url} />
                        <Card.Body>
                        <Card.Text>Uploaded by: {image.metadata.customMetadata && image.metadata.customMetadata.user ? image.metadata.customMetadata.user : "Unknown User"}</Card.Text>

                        <Card.Text>Uploaded at: {new Date(image.metadata.timeCreated).toLocaleString()}</Card.Text>
                        </Card.Body>
                    </Card>
                ))}
            </div>
        </Container>
    )
}