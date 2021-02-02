/* eslint-disable require-jsdoc */
import React from 'react';

// STYLED COMPONENTS
import {Body, Title, Link, LinkContainer, Time,
  BlueText, InfoText, Col,
} from '../../../styles/home/mobile/styles';

// FUNCTIONS IMPORT
import formatTime from '../../../functions/formatTime';

function Home(props) {
  return (
    <Col>
      <Body>
        <Time>{formatTime(new Date())}</Time>
        <Title>PSM</Title>
        <LinkContainer>
          <Link href='/work'>Work</Link>
          <Link href='/about'><BlueText>About</BlueText></Link>
          <Link href='/contact/contact'>Contact</Link>
        </LinkContainer>
      </Body>
      <InfoText>emails us at <a style={{
        textDecoration: 'underline',
        color: '#A1E0D3',
      }} target="_blank" rel="noopener noreferrer" href="mailto:info@platinumshark.com">
        info@platinumshark.com</a>
      </InfoText>
      <InfoText>
      Based in <br /> Montreal,Quebec
      </InfoText>
    </Col>
  );
}

export default Home;
