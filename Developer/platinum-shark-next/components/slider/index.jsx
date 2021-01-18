/* eslint-disable require-jsdoc */
import React, {useEffect, useState} from 'react';

// STYLED COMPONENTS
import {Body} from './styles';

// IMG IMPORT
import img1 from '../../public/slider1.png';
import img2 from '../../public/slider2.png';
import img3 from '../../public/slider3.png';
import img4 from '../../public/slider4.png';
import img5 from '../../public/slider5.png';
import img6 from '../../public/slider6.png';
import img7 from '../../public/slider7.png';
import img8 from '../../public/slider9.png';

function Slider(props) {
  const [imageArray] = useState([img1, img2, img3, img4, img5, img6, img7, img8]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      changeImage();
    }, 800);
  }, []);

  useEffect(() => {
    console.log('Index updated!');
    setTimeout(() => {
      changeImage();
    }, 800);
  }, [index]);

  const changeImage = () => {
    console.log('changeImage triggred!');
    if (imageArray.length - 1 > index) {
      setIndex(index + 1);
    } else {
      setIndex(0);
    }
    console.log(`Index: ${index}`);
  };

  return (
    <Body src={imageArray[index]}>
    </Body>
  );
}

export default Slider;
