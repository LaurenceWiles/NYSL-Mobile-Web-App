import { Button } from "react-bootstrap";

const PostButton = ({ onClick, uploading, disabled }) => {
  return (
    <Button
      variant="primary"
      onClick={onClick}
      disabled={disabled}
      className="mt-3"
    >
      {uploading ? "Uploading..." : "Post"}
    </Button>
  );
};

export default PostButton;
