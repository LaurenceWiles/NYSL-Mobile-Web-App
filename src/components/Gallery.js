import React from "react";
import { Card, Image } from "react-bootstrap";

const Gallery = ({ images }) => {
    return (
        <>
            <h2 className="mt-5">Gallery</h2>
            <div className="d-flex flex-wrap">
                {images.map((image, index) => (
                    <Card key={index} className="m-2" style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={image.url} />
                        <Card.Body>
                            <Card.Text>Uploaded by: {image.metadata.customMetadata && image.metadata.customMetadata.user ? image.metadata.customMetadata.user : "Unknown User"}</Card.Text>
                            <Card.Text>Uploaded at: {new Date(image.metadata.timeCreated).toLocaleString()}</Card.Text>
                        </Card.Body>
                    </Card>
                ))}
            </div>
        </>
    );
};

export default Gallery;
