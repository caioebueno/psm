/* eslint-disable require-jsdoc */
import React from 'react';

// STYLED COMPONENTS
import {Body, Text, SmallText, AnimatedBg, AnimatedLetter} from './styles';

function AnimatedWorkItem(props) {
  const renderText = () => {
    switch (props.text) {
      case 0:
        return <Text variants={text}
          initial='hidden'>web/app  <br /> development</Text>;
      case 1:
        return <Text variants={text}
          initial='hidden'>ui/ux <br /> design</Text>;
      case 2:
        return <SmallText variants={text}
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

  const text = {
    hidden: {
      color: '#000000',
    },
    visible: {
      color: '#ffffff',
    },
  };

  return (
    <Body whileHover='visible'>
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
