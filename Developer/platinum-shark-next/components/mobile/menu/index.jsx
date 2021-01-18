/* eslint-disable require-jsdoc */
import React from 'react';

// STYLED COMPONENTS
import {BlueText, Body, Link, Row, Close} from './styles';

function Menu(props) {
  return (
    <Body
      initial={{
        x: '-100%',
      }}
      animate={{
        x: '0',
      }}
    >
      <Close onClick={() => {props.setMenu(false)}}>Close</Close>
      <Row>
        <Link href='/'>Home</Link>
        {props.page === 0 ? <Link href='/work'><BlueText>Work</BlueText></Link> : <Link href='/work'>Work</Link>}
        {props.page === 1 ? <Link href='/about'><BlueText>About</BlueText></Link> : <Link href='/about'>About</Link>}
        {props.page === 2 ? <Link href='/contact/contact'><BlueText>Contact</BlueText></Link> : <Link href='/contact/contact'>Contact</Link> }
      </Row>
    </Body>
  );
}

export default Menu;
