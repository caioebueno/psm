/* eslint-disable require-jsdoc */
import React, { useEffect, useRef, useState } from 'react';

// STYLED COMPONENTS
import { Body, MemberContainer, Text, PopUp } from './styles';

function Team(props) {
  const [info, setInfo] = useState('');
  const popUpRef = useRef();

  useEffect(() => {
    document.addEventListener('mousemove', handleMouseMove);
  }, []);

  const handleMouseMove = (e) => {
    if (popUpRef && popUpRef.current) {
      popUpRef.current.style.left = `${e.pageX}px`;
      popUpRef.current.style.top = `${e.pageY}px`;
    }
  };

  return (
    <>
      <PopUp ref={popUpRef}>{info}</PopUp>
      <Body
        onMouseEnter={() => {
          popUpRef.current.style.visibility = 'visible';
        }}
        onMouseLeave={() => {
          popUpRef.current.style.visibility = 'hidden';
        }}
      >
        <MemberContainer
          side
          onMouseEnter={() => {
            setInfo('Daneil Aflalo');
          }}
        >
          <Text>Daniel <br /> Aflalo</Text>
        </MemberContainer>

        <MemberContainer
          onMouseEnter={() => {
            setInfo('Noah Aflalo');
          }}
        >
          <Text>Noah <br /> Aflalo</Text>
        </MemberContainer>

        <MemberContainer
          onMouseEnter={() => {
            setInfo('Caio Bueno');
          }}
          side
        >
          <Text>Caio <br /> Bueno</Text>
        </MemberContainer>

        <MemberContainer
          side
          bottom
          onMouseEnter={() => {
            setInfo('Mara Goodman');
          }}
        >
          <Text>Mara <br /> Goodman</Text>
        </MemberContainer>

        <MemberContainer
          bottom
          onMouseEnter={() => {
            setInfo('Jordan Outmezguine');
          }}
        >
          <Text>Jordan <br /> Outmezguine</Text>
        </MemberContainer>

        <MemberContainer
          bottom
          side
          onMouseEnter={() => {
            setInfo('Sara Morris');
          }}
        >
          <Text>Sara <br /> Morris</Text>
        </MemberContainer>
      </Body>
    </>
  );
}

export default Team;
