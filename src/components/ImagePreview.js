import Image from "react-bootstrap/Image";

const ImagePreview = ({ selectedImage }) => {
  if (!selectedImage) return null;

  return (
    <div className="mt-3 d-flex align-items-center flex-column">
      <h2>Selected Image:</h2>
      <div className="selected-image-div">
        <Image
          src={URL.createObjectURL(selectedImage)}
          alt="Selected"
          fluid
          className="w-100 selected-image-preview"
        />
      </div>
    </div>
  );
};

export default ImagePreview;
