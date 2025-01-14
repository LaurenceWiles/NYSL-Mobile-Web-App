import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { storage } from "../firebase";
import { ref, getDownloadURL, listAll, getMetadata } from "firebase/storage";
import { Container, Alert } from "react-bootstrap";
import UploadPicture from "../components/UploadPicture";
import Gallery from "../components/Gallery";
import { auth } from "../firebase";

export const PhotoGallery = () => {
  const { gameId } = useParams();
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
  const handleUpload = (newImage) => {
    setImages([newImage, ...images]);
  };

  return (
    <Container>
      {error && (
        <Alert variant="danger" className="mt-3">
          {error}
        </Alert>
      )}
      <UploadPicture gameId={gameId} user={user} onUpload={handleUpload} />
      <Gallery images={images} />
    </Container>
  );
};
