import { useState } from "react";
import {
  ref,
  uploadBytes,
  getDownloadURL,
  getMetadata,
} from "firebase/storage";
import { storage } from "../firebase";

const useUpload = (gameId, user, onUpload) => {
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState(null);

  const uploadImage = async (selectedImage, resetFileInput) => {
    if (!selectedImage || !user) return;

    setUploading(true);
    setError(null);

    const gameRef = ref(storage, `pictures/${gameId}/${selectedImage.name}`);

    try {
      const metadata = { customMetadata: { user: user.email } };
      await uploadBytes(gameRef, selectedImage, metadata);

      const newImageUrl = await getDownloadURL(gameRef);
      const newImageMetadata = await getMetadata(gameRef);

      onUpload({ url: newImageUrl, metadata: newImageMetadata });

      resetFileInput();
    } catch (error) {
      console.error("Error uploading file:", error);
      setError("Error uploading file. Please try again.");
    }

    setUploading(false);
  };

  return { uploadImage, uploading, error };
};

export default useUpload;
