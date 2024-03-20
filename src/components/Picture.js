import React from 'react';
import Image from 'react-bootstrap/Image';
import Photo from '../utils/asset/design1_image1.jpg';

export const Picture = () => {
    return <Image src={Photo} fluid />;
  }