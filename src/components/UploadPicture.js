import { Alert } from "react-bootstrap";
import useImageUpload from "../hooks/useImageUpload";
import useFileSelection from "../hooks/useFileSelection";
import { useAutoScroll } from "../hooks/useAutoScroll";
import FileInput from "./FileInput";
import ImagePreview from "./ImagePreview";
import PostButton from "./PostButton";
import CancelButton from "./CancelButton";

const UploadPicture = ({ gameId, user, onUpload }) => {
  const { selectedImage, setSelectedImage, fileInputRef, resetFileInput } =
    useFileSelection();
  const { uploadImage, uploading, error } = useImageUpload(
    gameId,
    user,
    onUpload
  );
  const previewRef = useAutoScroll(selectedImage, "scrollIntoView");

  return (
    <>
      <div className="upload-picture-div" ref={previewRef}>
        <h2 className="mt-5">Upload A Picture</h2>
        <FileInput
          fileInputRef={fileInputRef}
          setSelectedImage={setSelectedImage}
        />
        <ImagePreview selectedImage={selectedImage} onCancel={resetFileInput} />

        {error && (
          <Alert variant="danger" className="mt-3">
            {error}
          </Alert>
        )}
        <PostButton
          onClick={() => uploadImage(selectedImage, resetFileInput)}
          uploading={uploading}
          disabled={!selectedImage || uploading}
        />
        <CancelButton onClick={resetFileInput} />
      </div>
    </>
  );
};

export default UploadPicture;
