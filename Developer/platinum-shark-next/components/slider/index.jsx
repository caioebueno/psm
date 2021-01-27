/* eslint-disable require-jsdoc */
import React, {useEffect, useState} from 'react';

// STYLED COMPONENTS
import {Body} from './styles';

// IMG IMPORT
// import img0 from '../../public/slider0.png';
// import img1 from '../../public/slider1.png';
// import img2 from '../../public/slider2.png';
// import img4 from '../../public/slider4.png';
// import img5 from '../../public/slider5.png';

import video from '../../public/shark.mp4';

function Slider(props) {
  // const [imageArray] = useState([img0, img1, img2, img4, img5]);
  // const [index, setIndex] = useState(0);

  // useEffect(() => {
  //   setTimeout(() => {
  //     changeImage();
  //   }, 1000);
  // }, []);

  // useEffect(() => {
  //   console.log('Index updated!');
  //   setTimeout(() => {
  //     changeImage();
  //   }, 1000);
  // }, [index]);

  // const changeImage = () => {
  //   console.log('changeImage triggred!');
  //   if (imageArray.length - 1 > index) {
  //     setIndex(index + 1);
  //   } else {
  //     setIndex(0);
  //   }
  //   console.log(`Index: ${index}`);
  // };

  return (
    <Body muted autoPlay loop width='600' height='950'>
      <source src={video} muted autoPlay loop />
    </Body>
  );
}

export default Slider;
