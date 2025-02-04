import { useParams } from "react-router-dom";
import { Container, Alert } from "react-bootstrap";
import UploadPicture from "../components/UploadPicture";
import Gallery from "../components/Gallery";
import { useAuthRedirect } from "../hooks/useAuthRedirect";
import { useFetchImages } from "../hooks/useFetchImages";

export const PhotoGallery = () => {
  const { gameId } = useParams();
  const user = useAuthRedirect();
  const { images, error, addImage } = useFetchImages(gameId);

  return (
    <Container className="text-center d-flex justify-content-center">
      <div className="gallery-div">
        {error && (
          <Alert variant="danger" className="mt-3">
            {error}
          </Alert>
        )}
        <Gallery images={images} />
        <UploadPicture gameId={gameId} user={user} onUpload={addImage} />
      </div>
    </Container>
  );
};
