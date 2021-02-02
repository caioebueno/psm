/* eslint-disable require-jsdoc */
import React, {useState, useEffect} from 'react';

// COMPONENTS IMPORT
import Header from '../../../components/mobile/header';
import Menu from '../../../components/mobile/menu';
import Footer from '../../../components/mobile/footer';
import WorkGrid from '../../../components/workGrid';


function Work(props) {
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
      {menu && <Menu page={0} setMenu={setMenu} />}
      <div>
        <Header title='Work' setMenu={setMenu} />
        <WorkGrid />
        <Footer work />
      </div>
    </>
  );
}

export default Work;
