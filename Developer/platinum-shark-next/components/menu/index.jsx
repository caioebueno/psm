/* eslint-disable require-jsdoc */
import React from 'react';

// STYLED COMPONENTS
import {
  Body, Link, ActiveLink, LinkContainer,
  Logo,
} from './styles';


const item = {
  hidden: { y: -50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  }
};


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
        initial='hidden'
        animate='visible'
        transition={{
          type: 'keyframes',
          delayChildren: 0.3,
          staggerChildren: 0.2,
        }}
      >
        {page === 0 ?
          <ActiveLink transition={{
            type: 'keyframes',}} href='/' >Home</ActiveLink> :
          <Link transition={{
            type: 'keyframes',}} variants={item} href='/' >Home</Link>}
        {page === 1 ?
          <ActiveLink transition={{
            type: 'keyframes',}} variants={item} href='/work' >Work</ActiveLink> :
          <Link transition={{
            type: 'keyframes',}} variants={item} href='/work' >Work</Link>}
        {page === 2 ?
          <ActiveLink transition={{
            type: 'keyframes',}} variants={item} href='/about' >About</ActiveLink> :
          <Link transition={{
            type: 'keyframes',}} variants={item} href='/about' >About</Link>}
        {page === 3 ?
          <ActiveLink transition={{
            type: 'keyframes',}} variants={item} href='/contact/contact' >Contact</ActiveLink> :
          <Link transition={{
            type: 'keyframes',}} variants={item} href='/contact/contact' >Contact</Link>}
      </LinkContainer>
      <Logo>PSM</Logo>
    </Body>
  );
}

export default Menu;
