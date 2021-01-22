/* eslint-disable require-jsdoc */
import React from 'react';

// STYLED COMPONENTS
import {
  Body, Link, ActiveLink, LinkContainer,
  Logo,
} from './styles';

function Menu(props) {
  const {page} = props;

  return (
    <Body
      initial={{y: '-100%'}}
      animate={{y: '0'}}
      transition={{
        type: 'keyframes',
      }}
    >
      <LinkContainer
        initial={{scale: 0}}
        animate={{scale: 1}}
        transition={{
          delay: 0.3,
        }}
      >
        {page === 0 ?
          <ActiveLink href='/' >Home</ActiveLink> :
          <Link href='/' >Home</Link>}
        {page === 1 ?
          <ActiveLink href='/work' >Work</ActiveLink> :
          <Link href='/work' >Work</Link>}
        {page === 2 ?
          <ActiveLink href='/about' >About</ActiveLink> :
          <Link href='/about' >About</Link>}
        {page === 3 ?
          <ActiveLink href='/contact/contact' >Contact</ActiveLink> :
          <Link href='/contact/contact' >Contact</Link>}
      </LinkContainer>
      <Logo>PSM</Logo>
    </Body>
  );
}

export default Menu;
