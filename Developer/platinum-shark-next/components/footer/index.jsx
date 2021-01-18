/* eslint-disable require-jsdoc */
import React from 'react';

// STYLED COMPONENTS
import {Body, Text, BlueText, Logo, Center} from './styles';

import Gif from '../../components/3dText/index';

function Footer(props) {
  return (
    <Body>
      <Text>creativity is our passion. execution is our promise to you.
        <BlueText href='/contact/contact'> let’s connect</BlueText>
      </Text>
      <Center>
        {/* <Gif src='https://media.giphy.com/media/Q8VP1dAbO9bliUcE9L/source.gif' /> */}
        <Gif />
      </Center>
      <Logo>PSM</Logo>
    </Body>
  );
}

export default Footer;
