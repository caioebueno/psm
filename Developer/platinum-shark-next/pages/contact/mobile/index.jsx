/* eslint-disable require-jsdoc */
import React, {useEffect, useState} from 'react';

// COMPONENTS IMPORT
import Header from '../../../components/mobile/header';
import Menu from '../../../components/mobile/menu';
import Footer from '../../../components/mobile/footer';
import Slider from '../../../components/slider';

// STYLED COMPONENTS
import {Input, Form, TextArea,
  Button, Body, Text, TextSpacer,}
  from '../../../styles/contact/mobile/styles';

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
      <Body>
        <Header title='Contact' setMenu={setMenu} />
        <TextSpacer />
        <Text>
        137 rue saint-ferdinand, <br />
        suite 222 <br />
        montreal,quebec <br />
        h4c2s6
        </Text>
        <Text>
        514-291-3094 <br />
        514-883-5100 <br />
        info@platinumshark.com
        </Text>
        <Text>
        We are here for you. Have a questions? or just want some more info? let us know, and we'll get back to as soon as we can!<br /><br />
                  Have a great day :)
                  </Text>
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
        <Slider mobile />
        <Footer />
      </Body>
    </>
  );
}

export default Contact;
