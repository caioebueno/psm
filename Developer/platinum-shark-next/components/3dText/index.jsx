/* eslint-disable require-jsdoc */
import React from 'react';

// STYLED COMPONENTS
import {LineOne, LineTwo, LineThree, LineZero, LineFive, Text, Body, BlueText} from './styles';

function index(props) {
  return (
    <Body>
      <LineZero>
          <div
            style={{
                width: 1,
                height: 50,
            }}
          ></div>
         <Text><BlueText>dasdasdasdsa</BlueText></Text>
      </LineZero>
      <LineOne>
        <Text>dasdasdasdsa</Text>
        <Text>dasdas</Text>
      </LineOne>
      <LineTwo>
        <Text>dasdas</Text>
        <Text>dasdasdsdsa</Text>
      </LineTwo>
      <LineThree>
        <Text>dasdasdsdsa</Text>
        <Text>asd</Text>

      </LineThree>
      <LineFive>
      <Text><BlueText>asd</BlueText></Text>
    </LineFive>
    </Body>
  );
}

export default index;
