import { useState, useRef } from "react";
import { ref, uploadBytes } from "firebase/storage";
import { storage } from "../firebase";
import { Form, Button, Alert } from "react-bootstrap";
import { getDownloadURL, getMetadata } from "firebase/storage";
import Image from "react-bootstrap/Image";

const UploadPicture = ({ gameId, user, onUpload }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState(null);
  const fileInputRef = useRef(null);

  const handleFileSelect = (event) => {
    const selectedFile = event.target.files[0];
    setSelectedImage(selectedFile);
    setError(null);
  };

  const handleUpload = async () => {
    if (selectedImage && user) {
      setUploading(true);
      const gameRef = ref(storage, `pictures/${gameId}/${selectedImage.name}`);
      try {
        const metadata = {
          customMetadata: {
            user: user.email,
          },
        };
        await uploadBytes(gameRef, selectedImage, metadata);
        const newImageUrl = await getDownloadURL(gameRef);
        const newImageMetadata = await getMetadata(gameRef);
        onUpload({ url: newImageUrl, metadata: newImageMetadata });
        setSelectedImage(null);
        fileInputRef.current.value = "";
      } catch (error) {
        console.error("Error uploading file:", error);
        setError("Error uploading file. Please try again.");
      }
      setUploading(false);
    }
  };

  return (
    <>
      <div className="upload-picture-div">
        <h2 className="mt-5">Upload A Picture</h2>
        <Form.Group controlId="formFile" className="mb-3">
          <Form.Control
            ref={fileInputRef}
            type="file"
            accept="image/*"
            capture="environment"
            onChange={handleFileSelect}
          />
        </Form.Group>
        {selectedImage && (
          <div className="mt-3 d-flex align-items-center flex-column">
            <h2>Selected Image:</h2>
            <div className="selected-image-div ">
              <Image
                src={URL.createObjectURL(selectedImage)}
                alt="Selected"
                fluid
                className="selected-image-preview"
              />
            </div>
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
      </div>
    </>
  );
};

export default UploadPicture;
