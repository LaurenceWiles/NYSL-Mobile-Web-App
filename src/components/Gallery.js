import { Card } from "react-bootstrap";

const Gallery = ({ images }) => {
  return (
    <>
      <h1 className="mt-5">Gallery</h1>
      <div className="d-flex flex-wrap justify-content-center">
        {images.map((image) => (
          <Card key={image.url} className="m-2 photo-card">
            <Card.Img variant="top" src={image.url} />
            <Card.Body>
              <Card.Text>
                Uploaded by: {image.metadata?.customMetadata?.user || "Unknown"}
              </Card.Text>
              <Card.Text>
                Uploaded at:{" "}
                {image.metadata?.timeCreated
                  ? new Date(image.metadata.timeCreated).toLocaleString()
                  : "Unknown"}
              </Card.Text>
            </Card.Body>
          </Card>
        ))}
      </div>
    </>
  );
};

export default Gallery;
