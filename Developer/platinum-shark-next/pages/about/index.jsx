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
  Video, TinyText, Col, MediumText,
} from '../../styles/about/styles';

// COMPONENTS IMPORT
import Footer from '../../components/footer/index';
import MenuComponent from '../../components/menu';
import AnimatedWorkItem from '../../components/animatedWorkItem';
import Team from '../../components/team';

// VIDEO
import video from '../../public/video.mp4';

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
              <SmallText>
                Development <br />
                Design <br />
                Marketing <br />
              </SmallText>
              <Outdoor>
                <Video
                  width={1300}
                  autoPlay
                  muted
                  loop
                  playsInline
                >
                  <source src={video} />
                </Video>
                {/* <Gif src='https://media.giphy.com/media/VbEuHLBUPQm55MyqJg/source.gif' />
                <InvertedGif src='https://media.giphy.com/media/VbEuHLBUPQm55MyqJg/source.gif' /> */}
              </Outdoor>
            </ColEnd>
            <Row>
              <Col width={741}>
                <MediumText>
            A Great business
            starts as an idea.
            This idea is then
             forged into reality
            through hard work
             and execution. This
            is our philosophy.
                </MediumText>
                <TinyText>
            we demand our work speaks for
            itself, and engages potential
            customers with your brand.
            We go the extra mile, strive
            for the best, and provide
            transparency at all levels
            to ensure confidence.<br /><br />
                </TinyText>
                <TinyText>
            we will pick your brain,
and ask the hard questions.
roll up our sleeves and acheive what needs to be done for your success.
your success is our success!<br /><br />
                </TinyText>
                <TinyText>
a great design must be inovative. break the restraints of industry standard, and unlock your brands potential. <br /><br />
                </TinyText>
                <TinyText>
                shift the way you think. <br />
accept challenges that may come your way. <br />
find solutions.<br /><br />
</TinyText>
<TinyText>
this is the way. 
</TinyText>
              </Col>
              <Col>
                <AnimatedWorkItem text={0} />
                <AnimatedWorkItem text={1} />
                <AnimatedWorkItem small text={2} />
              </Col>
            </Row>
            <SubTitle>team</SubTitle>
          </Body>
        </Center>
        <Team />

        <Footer />
      </Breakpoint>
      <Breakpoint customQuery='(max-width: 1200px)'>
        <Mobile />
      </Breakpoint>
    </>
  );
}

export default About;
