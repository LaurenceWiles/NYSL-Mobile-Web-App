import React from "react";
import { Form } from "react-bootstrap";

const FileInput = ({ onFileSelect }) => {
    const handleFileSelect = (event) => {
        const selectedFile = event.target.files[0];
        onFileSelect(selectedFile);
    };

    return (
        <Form.Group controlId="formFile" className="mb-3">
            <Form.Control 
                type="file" 
                accept="image/*" 
                capture="environment" 
                onChange={handleFileSelect}
            />
        </Form.Group>
    );
};

export default FileInput;
