/* eslint-disable require-jsdoc */
import React, {useState} from 'react';

// COMPONENTS IMPORT
import Header from '../../../components/mobile/header';
import Menu from '../../../components/mobile/menu';
import Footer from '../../../components/mobile/footer';


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
        <Footer />
      </div>
    </>
  );
}

export default Work;
