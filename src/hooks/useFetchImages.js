import { useState, useEffect } from "react";
import { storage } from "../config/firebase";
import { ref, getDownloadURL, listAll, getMetadata } from "firebase/storage";

export const useFetchImages = (gameId) => {
  const [images, setImages] = useState([]);
  const [error, setError] = useState(null);

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

  const addImage = (newImage) => {
    setImages((prevImages) => [...prevImages, newImage]);
  };

  return { images, error, addImage };
};
