/* eslint-disable require-jsdoc */
import React from 'react';

// STYLED COMPONENTS
import {Body, Text, BlueText, Logo, Gif, Center} from './styles';

function Footer(props) {
  return (
    <Body>
      <Text>creativity is our passion. execution is our promise to you.
        <BlueText href='/contact/contact'> let’s connect</BlueText>
      </Text>
      <Center>
        <Gif src='https://media.giphy.com/media/Q8VP1dAbO9bliUcE9L/source.gif' />
      </Center>
      <Logo>PSM</Logo>
    </Body>
  );
}

export default Footer;
