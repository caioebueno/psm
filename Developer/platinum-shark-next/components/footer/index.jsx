/* eslint-disable require-jsdoc */
import React from 'react';

// STYLED COMPONENTS
import {Body, Text, BlueText, Logo, Center, Gif} from './styles';

import Animation from '../../components/3dText/index';

function Footer(props) {
  return (
    <Body>
      <Text>creativity is our passion. execution is our promise to you.
        <BlueText href='/contact/contact'> let’s connect</BlueText>
      </Text>
      <Center>
        {
          props.work ?
        <Gif src='https://media.giphy.com/media/Q8VP1dAbO9bliUcE9L/source.gif' /> :
          <Animation />
        }
      </Center>
      <Logo href='/'>PSM</Logo>
    </Body>
  );
}

export default Footer;
