import { Button } from "react-bootstrap";

const CancelButton = ({ onClick }) => {
  return (
    <Button variant="secondary" onClick={onClick} className="mt-3 ms-2">
      Cancel
    </Button>
  );
};

export default CancelButton;
