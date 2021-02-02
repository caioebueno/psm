/* eslint-disable require-jsdoc */
import React, {useState, useEffect} from 'react';

// COMPONENTS IMPORT
import Header from '../../../components/mobile/header';
import Menu from '../../../components/mobile/menu';
import Footer from '../../../components/mobile/footer';
import Team from '../../../components/team';

// VIDEO
import video from '../../../public/video.mp4';

// STYLED COMPONENTS
import {Video, MediumText, TinyText, Body, Text, WorkContainer, WorkText} from '../../../styles/about/mobile/styles.js';

function About(props) {
  const [menu, setMenu] = useState(false);

  useEffect(() => {
    if (menu) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [menu]);

  return (
    <>
      {menu && <Menu page={1} setMenu={setMenu} />}
      <Body>
        <Header title='About' setMenu={setMenu} />
        <Video width='90%' autoPlay muted loop>
          <source src={video} />
        </Video>
        <div style={{width: '90%', marginTop: 50}}>
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
        </div>
        <WorkContainer>
          <WorkText>web/app <br /> development</WorkText>
        </WorkContainer>
        <WorkContainer>
          <WorkText>ui/ux <br /> design</WorkText>
        </WorkContainer>
        <WorkContainer>
          <WorkText>marketing/store <br /> managment</WorkText>
        </WorkContainer>
        <Text>team</Text>
        <Team />
        <Footer />
      </Body>
    </>
  );
}

export default About;
