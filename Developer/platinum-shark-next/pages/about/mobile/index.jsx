/* eslint-disable require-jsdoc */
import React, {useState} from 'react';

// COMPONENTS IMPORT
import Header from '../../../components/mobile/header';
import Menu from '../../../components/mobile/menu';
import Footer from '../../../components/mobile/footer';

function About(props) {
  const [menu, setMenu] = useState(false);

  return (
    <>
      {menu && <Menu page={1} setMenu={setMenu} />}
      <div>
        <Header title='About' setMenu={setMenu} />
        <Footer />
      </div>
    </>
  );
}

export default About;
