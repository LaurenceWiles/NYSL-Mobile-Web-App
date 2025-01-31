import { useState, useRef } from "react";
import {
  ref,
  uploadBytes,
  getDownloadURL,
  getMetadata,
} from "firebase/storage";
import { storage } from "../firebase";
import { Alert } from "react-bootstrap";
import FileInput from "./FileInput";
import ImagePreview from "./ImagePreview";
import PostButton from "./PostButton";
import CancelButton from "./CancelButton";

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
        if (fileInputRef.current) fileInputRef.current.value = "";
      } catch (error) {
        console.error("Error uploading file:", error);
        setError("Error uploading file. Please try again.");
      }
      setUploading(false);
    }
  };

  const handleCancel = () => {
    setSelectedImage(null);
    fileInputRef.current.value = "";
  };

  return (
    <>
      <div className="upload-picture-div">
        <h2 className="mt-5">Upload A Picture</h2>
        <FileInput
          fileInputRef={fileInputRef}
          onFileSelect={handleFileSelect}
        />
        <ImagePreview selectedImage={selectedImage} onCancel={handleCancel} />
        {error && (
          <Alert variant="danger" className="mt-3">
            {error}
          </Alert>
        )}
        <PostButton
          onClick={handleUpload}
          uploading={uploading}
          disabled={!selectedImage || uploading}
        />
        <CancelButton onClick={handleCancel} />
      </div>
    </>
  );
};

export default UploadPicture;
