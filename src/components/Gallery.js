import { Card } from "react-bootstrap";

const Gallery = ({ images }) => {
  return (
    <>
      <h1 className="mt-5">Gallery</h1>
      <div className="d-flex flex-wrap">
        {images.map((image) => (
          <Card key={image.url} className="m-2" style={{ width: "18rem" }}>
            <Card.Img variant="top" src={image.url} />
            <Card.Body>
              <Card.Text>
                Uploaded by:{" "}
                {image.metadata.customMetadata &&
                image.metadata.customMetadata.user
                  ? image.metadata.customMetadata.user
                  : "Unknown User"}
              </Card.Text>
              <Card.Text>
                Uploaded at:{" "}
                {new Date(image.metadata.timeCreated).toLocaleString()}
              </Card.Text>
            </Card.Body>
          </Card>
        ))}
      </div>
    </>
  );
};

export default Gallery;
