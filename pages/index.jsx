/* eslint-disable require-jsdoc */
import React from 'react';

import Home from './home/home';

function Index(props) {
  return (
    <Home setTheme={props.setTheme} theme={props.theme} />
  );
}

export default Index;
