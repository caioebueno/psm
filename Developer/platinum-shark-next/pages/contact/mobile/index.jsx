/* eslint-disable require-jsdoc */
import React, {useEffect, useState} from 'react';

// COMPONENTS IMPORT
import Header from '../../../components/mobile/header';
import Menu from '../../../components/mobile/menu';
import Footer from '../../../components/mobile/footer';

// STYLED COMPONENTS
import {Input, Form, TextArea, Button} from '../../../styles/contact/mobile/styles';

function Contact(props) {
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
      {menu && <Menu page={2} setMenu={setMenu} />}
      <div>
        <Header title='Contact' setMenu={setMenu} />
        <Form>
          <Input
            placeholder='Name'
          />
          <Input
            placeholder='Email'
          />
          <Input
            placeholder='Phone'
          />
          <Input
            placeholder='Company'
          />
          <TextArea
            placeholder='Messege'
          />
          <Button>Submit</Button>
        </Form>
        <Footer />
      </div>
    </>
  );
}

export default Contact;
