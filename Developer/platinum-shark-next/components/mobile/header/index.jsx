/* eslint-disable require-jsdoc */
import React from 'react';
import PropTypes from 'prop-types';

// STYLED COMPONENTS
import {Body, Title, Time} from './styles';

// FUNCTION IMPORT
import formatTime from '../../../functions/formatTime';

Header.propTypes = {
  title: PropTypes.string,
};


function Header(props) {
  const {title} = props;

  return (
    <Body>
      <Title>{title}</Title>
      <Time>{formatTime(new Date())}</Time>
    </Body>
  );
}

export default Header;
