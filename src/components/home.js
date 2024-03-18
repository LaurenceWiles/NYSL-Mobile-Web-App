import React from 'react';
import { Schedule } from './schedule';
import { Container } from 'react-bootstrap';
import Photo from '../utils/asset/design1_image1.jpg';
import Image from 'react-bootstrap/Image';
import { Picture } from './Picture';
import { HeadingText } from './HeadingText';
import { About } from './About';
import { Contact } from './Contact';



export const Home = () => {
    return (
        <div>
			<Container>
			<HeadingText />
			<Picture/>
			<About />
        	<Contact />
			</Container>
        </div>
    )
}









