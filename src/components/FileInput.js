import { Form } from "react-bootstrap";

const FileInput = ({ fileInputRef, setSelectedImage }) => {
  const handleFileSelect = (event) => {
    const selectedFile = event.target.files[0];
    setSelectedImage(selectedFile);
  };

  return (
    <Form.Group controlId="formFile" className="mb-3">
      <Form.Control
        ref={fileInputRef}
        type="file"
        accept="image/*"
        capture="environment"
        onChange={handleFileSelect}
      />
    </Form.Group>
  );
};

export default FileInput;
