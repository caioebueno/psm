/* eslint-disable require-jsdoc */
import React from 'react';

// STYLED COMPONENTS
import {Body, Title, Link, LinkContainer, Time,
  BlueText,
} from './styles';

// FUNCTIONS IMPORT
import formatTime from '../../../functions/formatTime';

function Home(props) {
  return (
    <Body>
      <Time>{formatTime(new Date())}</Time>
      <Title>PSM</Title>
      <LinkContainer>
        <Link href='/work'>Work</Link>
        <Link href='/about'><BlueText>About</BlueText></Link>
        <Link href='/contact/contact'>Contact</Link>
      </LinkContainer>
    </Body>
  );
}

export default Home;
