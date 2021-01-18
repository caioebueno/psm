/* eslint-disable require-jsdoc */
import React, {useState} from 'react';
import {Breakpoint} from 'react-socks';

// MOBILE
import Mobile from './mobile';

// STYLED COMPONENTS
import {
  Body, Row, Title, Time, Outdoor, Text,
  WorkItem, SubTitle, Gif, InvertedGif,
  SmallText, ColEnd, WorkItemText,
  SmallWorkItemText, Center, Menu,
} from './styles';

// COMPONENTS IMPORT
import Footer from '../../components/footer/index';
import MenuComponent from '../../components/menu';

// FUNCTIONS IMPORT
import formatTime from '../../functions/formatTime';

function About(props) {
  const [menu, setMenu] = useState(false);

  return (
    <>
      {menu && <MenuComponent page={2} />}
      <Breakpoint customQuery='(min-width: 1200px)'>
        <Center>
          <Body>
            <Row>
              <Title>About</Title>
              <div style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-end'}}>
                <Menu onClick={() => {
                  setMenu(true);
                }}>Menu</Menu>
                <Time>{formatTime(new Date())}</Time>
              </div>
            </Row>
            <ColEnd>
              <SmallText>Something here</SmallText>
              <Outdoor>
                <Gif src='https://media.giphy.com/media/VbEuHLBUPQm55MyqJg/source.gif' />
                <InvertedGif src='https://media.giphy.com/media/VbEuHLBUPQm55MyqJg/source.gif' />
              </Outdoor>
            </ColEnd>
            <Text>dadadaddadadaddadadaddadadadda<br />
          adadaddadadaddadadaddadadaddadadad<br />
          dadadaddadadaddadadaddadadaddadadad<br />
          dadadaddadadaddadadaddadadaddadadad<br />
          dadadaddadadaddadadaddadadad.</Text>
            <Row>
              <WorkItem>
                <WorkItemText>web/app  <br /> develpoment</WorkItemText>
              </WorkItem>
              <WorkItem>
                <WorkItemText>ui/ux <br /> design</WorkItemText>
              </WorkItem>
              <WorkItem>
                <SmallWorkItemText>
              marketing/store <br /> managment
                </SmallWorkItemText>
              </WorkItem>
            </Row>
            <SubTitle>Team</SubTitle>
          </Body>
        </Center>
        <Footer />
      </Breakpoint>
      <Breakpoint customQuery='(max-width: 1200px)'>
        <Mobile />
      </Breakpoint>
    </>
  );
}

export default About;
