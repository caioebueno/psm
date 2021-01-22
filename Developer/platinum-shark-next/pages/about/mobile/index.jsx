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
import {Video, Text, Body} from '../../../styles/about/mobile/styles.js';

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
        <Video width='300px' autoPlay muted loop>
          <source src={video} />
        </Video>
        <Text>
          {/* dadadaddadadaddadadaddadadad <br />
          dadadaddadadaddadadaddadadad <br />
          dadadaddadadaddadadaddadadad <br />
          dadadaddadadaddadadaddadadad <br />
          dadadaddadadaddadadaddadadad <br />
          dadadaddadadaddadadaddadadad <br /> */}
        </Text>
        <Team />
        <Footer />
      </Body>
    </>
  );
}

export default About;
