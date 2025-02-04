import { useState } from "react";
import {
  ref,
  uploadBytes,
  getDownloadURL,
  getMetadata,
} from "firebase/storage";
import { storage } from "../firebase";

const useImageUpload = (gameId, user, onUpload) => {
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState(null);

  const uploadImage = async (file, resetFileInput) => {
    if (!file) return;

    setUploading(true);
    setError(null);

    try {
      const storageRef = ref(storage, `pictures/${gameId}/${file.name}`);
      await uploadBytes(storageRef, file, {
        customMetadata: { user: user.email },
      });
      const url = await getDownloadURL(storageRef);
      const metadata = await getMetadata(storageRef);

      const newImage = {
        url,
        metadata,
      };
      onUpload(newImage);
      resetFileInput();
    } catch (err) {
      console.error("Upload failed:", err);
      setError("Failed to upload image. Please try again.");
    } finally {
      setUploading(false);
    }
  };

  return { uploadImage, uploading, error };
};

export default useImageUpload;
