/* eslint-disable require-jsdoc */
import React from 'react';
import PropTypes from 'prop-types';
import {Breakpoint} from 'react-socks';

// MOBILE
import Mobile from './mobile';

// STYLED COMPONENTS IMPORT
import {Body, Title, Row, RowCenter, RowEnd, Time, ThemeToggle, Col, Link, Description} from './style';

// FUNCTIONS IMPORT
import formatTime from '../../functions/formatTime';

Home.propTypes = {
  setTheme: PropTypes.func,
  theme: PropTypes.bool,
};

function Home(props) {
  return (
    <>
      <Breakpoint customQuery='(min-width: 1200px)'>
        <Body>
          <Row>
            <Col>
              <Title>PSM</Title>
              <ThemeToggle
                whileHover={{scale: 1.8}}
                onClick={() => {
                  props.setTheme(!props.theme);
                }} />
            </Col>
            <Time>{formatTime(new Date())}</Time>
          </Row>
          <RowCenter>
            <Link>WorK</Link>
            <Link href='/about'>About</Link>
            <Link href='/contact/contact'>Contact</Link>
          </RowCenter>
          <RowEnd>
            <Description>If you’d like to work with us or have any questions, <br />
            emails us at info@platinumshar.com </Description>
            <Description>Based in <br /> Montreal,Quebec </Description>
          </RowEnd>
        </Body>
      </Breakpoint>
      <Breakpoint customQuery='(max-width: 1200px)'>
        <Mobile />
      </Breakpoint>
    </>
  );
}

export default Home;
