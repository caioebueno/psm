/* eslint-disable require-jsdoc */
import React, { useState } from 'react';

// STYLED COMPONENTS
import {Body, Text, SmallText, AnimatedBg, AnimatedLetter} from './styles';

function AnimatedWorkItem(props) {
  const [color, setColor] = useState(true)

  const renderText = () => {
    switch (props.text) {
      case 0:
        return <Text color initial='hidden'>web/app  <br /> development</Text>;
      case 1:
        return <Text color initial='hidden'>ui/ux <br /> design</Text>;
      case 2:
        return <SmallText color 
          initial='hidden'>marketing/store <br /> managment</SmallText>;
    }
  };

  const animatedBg = {
    hidden: {
      x: '33vw',
    },
    visible: {
      x: 0,
    },
  };



  return (
    <Body whileHover='visible' onMouseEnter={() => {
      setColor(false)
    }}
      onMouseLeave={() => {
        setColor(true)
      }}
    >
      {renderText()}
      <AnimatedBg
        variants={animatedBg}
        initial='hidden'
        transition={{
          type: 'ease',
        }}
      />
    </Body>
  );
}

export default AnimatedWorkItem;
