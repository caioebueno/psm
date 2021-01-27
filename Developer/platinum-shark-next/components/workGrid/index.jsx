/* eslint-disable require-jsdoc */
import React from 'react';

// STYLED COMPONENTS
import {Body, Row, Image} from './styles';

// Image IMPORT
import work1 from '../../public/work1.png';
import work2 from '../../public/work2.png';
import work3 from '../../public/work3.png';
import work4 from '../../public/work4.png';
import work5 from '../../public/work5.png';
import work6 from '../../public/work6.png';
import work7 from '../../public/work7.png';
import work8 from '../../public/work8.png';
import work9 from '../../public/work9.png';
import work10 from '../../public/work10.png';
import work11 from '../../public/work11.png';
import work12 from '../../public/work12.png';
import work13 from '../../public/work13.png';
// import work14 from '../../public/work14.png';
import work15 from '../../public/work15.png';

function WorkGrid(props) {
  return (
    <Body>
      <Row alignItems='flex-start'>
        <Image src={work7} alt=""/>
        <Image src={work8} alt=""/>
      </Row>
      <Row alignItems='flex-start'>
        <Image src={work9} alt=""/>
        <Image src={work10} alt=""/>
      </Row>
      <Row alignItems='flex-start'>
        <Image src={work1} alt=""/>
        <Image src={work2} alt=""/>
        <Image src={work3} alt=""/>
      </Row>
      <Row alignItems='flex-start'>
        <Image src={work4} alt=""/>
        <Image src={work5} alt=""/>
        <Image src={work6} alt=""/>
      </Row>
      <Row alignItems='flex-start'>
        <Image src={work11} alt=""/>
        <Image src={work12} alt=""/>
      </Row>
      <Row alignItems='flex-start'>
        <Image src={work13} alt=""/>
        <Image src={work15} alt=""/>
      </Row>
    </Body>
  );
}

export default WorkGrid;
