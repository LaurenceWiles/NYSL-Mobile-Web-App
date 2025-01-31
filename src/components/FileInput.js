import { Form } from "react-bootstrap";

const FileInput = ({ fileInputRef, onFileSelect }) => (
  <Form.Group controlId="formFile" className="mb-3">
    <Form.Control
      ref={fileInputRef}
      type="file"
      accept="image/*"
      capture="environment"
      onChange={onFileSelect}
    />
  </Form.Group>
);

export default FileInput;
