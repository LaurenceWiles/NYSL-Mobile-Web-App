import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { storage } from "../firebase";
import { ref, getDownloadURL, listAll, getMetadata } from "firebase/storage";
import { Container, Alert } from "react-bootstrap";
import UploadPicture from "../components/UploadPicture";
import Gallery from "../components/Gallery";
import { useAuthRedirect } from "../hooks/useAuthRedirect";

export const PhotoGallery = () => {
  const { gameId } = useParams();
  const user = useAuthRedirect();

  const [error, setError] = useState(null);
  const [images, setImages] = useState([]);

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
        urls.sort(
          (a, b) =>
            new Date(a.metadata.timeCreated) - new Date(b.metadata.timeCreated)
        );

        setImages(urls);
      } catch (error) {
        console.error("Error fetching images:", error);
        setError("Error fetching images. Please try again.");
      }
    };
    fetchImages();
  }, [gameId]);

  const handleUpload = (newImage) => {
    setImages([...images, newImage]);
  };

  return (
    <Container className="text-center d-flex justify-content-center">
      <div className="gallery-div">
        {error && (
          <Alert variant="danger" className="mt-3">
            {error}
          </Alert>
        )}
        <Gallery images={images} />
        <UploadPicture gameId={gameId} user={user} onUpload={handleUpload} />
      </div>
    </Container>
  );
};
