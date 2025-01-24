import Image from "react-bootstrap/Image";
import Photo from "../utils/asset/design1_image1.jpg";

export const HomePicture = () => {
  return <Image className="home-picture" src={Photo} fluid />;
};
