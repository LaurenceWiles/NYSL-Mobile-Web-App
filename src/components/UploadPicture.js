import { useState, useRef } from "react";
import { Alert } from "react-bootstrap";
import useUpload from "../hooks/useUpload";
import FileInput from "./FileInput";
import ImagePreview from "./ImagePreview";
import PostButton from "./PostButton";
import CancelButton from "./CancelButton";

const UploadPicture = ({ gameId, user, onUpload }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const fileInputRef = useRef(null);

  const { uploadImage, uploading, error } = useUpload(gameId, user, onUpload);

  const handleUpload = () => {
    uploadImage(selectedImage, resetFileInput);
  };

  const handleCancel = () => {
    resetFileInput();
  };

  const resetFileInput = () => {
    setSelectedImage(null);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  return (
    <>
      <div className="upload-picture-div">
        <h2 className="mt-5">Upload A Picture</h2>
        <FileInput
          fileInputRef={fileInputRef}
          setSelectedImage={setSelectedImage}
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
