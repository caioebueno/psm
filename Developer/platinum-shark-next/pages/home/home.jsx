/* eslint-disable require-jsdoc */
import React, {useEffect, useRef, useState} from 'react';
import PropTypes from 'prop-types';
import {Breakpoint} from 'react-socks';

// MOBILE
import Mobile from './mobile';

// STYLED COMPONENTS IMPORT
import {Body, Title, Row, RowCenter, RowEnd, Time, ThemeToggle, Col, Link, Description, AnimatedLetter} from '../../styles/home/style';

// FUNCTIONS IMPORT
import formatTime from '../../functions/formatTime';
import distortText from '../../functions/distortText';

Home.propTypes = {
  setTheme: PropTypes.func,
  theme: PropTypes.bool,
};

function Home(props) {
  const titleRef = useRef();
  const [title, setTitle] = useState('PSM');
  const [hover, setHover] = useState(false);

  useEffect(() => {
    distortText(setTitle, title)
    if (titleRef && titleRef.current) {
      titleRef.current.addEventListener('mouseover', () => {setHover(true)});
      titleRef.current.addEventListener('mouseout', () => {setHover(false)});
    }
  }, []);
  const animetedLetter = {
    hidden: {
      transform: 'rotateY(0deg)',
    },
    visible: {
      transform: 'rotateY(180deg)',
    },
  };

  return (
    <>
      <Breakpoint customQuery='(min-width: 1200px)'>
        <Body>
          <Row>
            <Col>
              <Title ref={titleRef}>{hover ? title : 'PSM'}</Title>
              <ThemeToggle
                whileHover={{scale: 1.8}}
                onClick={() => {
                  props.setTheme(!props.theme);
                }} />
            </Col>
            <Time>{formatTime(new Date())}</Time>
          </Row>
          <RowCenter>
            <Link href='/work'>WorK</Link>
            <Link href='/about'>About</Link>
            <Link href='/contact/contact'>Contact</Link>
          </RowCenter>
          <RowEnd>
            <Description>If you’d like to work with us or have any questions, <br />
            emails us at <a style={{
              textDecoration: 'underline',
              color: '#A1E0D3',
            }} target="_blank" rel="noopener noreferrer" href="mailto:info@platinumshark.com">info@platinumshark.com</a> </Description>
            <Description>Based in <br /> Montreal,Quebec </Description>
          </RowEnd>
        </Body>
      </Breakpoint>
      <Breakpoint customQuery='(max-width: 1200px)'>
        <Mobile setTheme={props.setTheme} theme={props.theme} />
      </Breakpoint>
    </>
  );
}

export default Home;
