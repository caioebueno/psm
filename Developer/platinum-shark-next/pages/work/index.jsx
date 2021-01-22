import React, {useState} from 'react';
import {Breakpoint} from 'react-socks';


// MOBILE
import Mobile from './mobile';

// STYLED COMPONENTS
import {Body, Time, Title, Row, Menu, Center} from '../../styles/work/styles';

// FUNCTIONS IMPORT
import formatTime from '../../functions/formatTime';

// COMPONENTS IMPORT
import Footer from '../../components/footer';
import MenuComponent from '../../components/menu';
import WorkGrid from '../../components/workGrid';

// eslint-disable-next-line require-jsdoc
function Work(props) {
  const [menu, setMenu] = useState(false);

  return (
    <>
      {menu && <MenuComponent page={1} />}
      <Breakpoint customQuery='(min-width: 1200px)'>
        <Center>
          <Body>
            <Row>
              <Title>Work</Title>
              <div style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-end'}}>
                <Menu onClick={() => {
                  setMenu(true);
                }}>Menu</Menu>
                <Time>{formatTime(new Date())}</Time>
              </div>
            </Row>
            <WorkGrid />
          </Body>
        </Center>
        <Footer work />
      </Breakpoint>
      <Breakpoint customQuery='(max-width: 1200px)'>
        <Mobile />
      </Breakpoint>
    </>
  );
}

export default Work;
