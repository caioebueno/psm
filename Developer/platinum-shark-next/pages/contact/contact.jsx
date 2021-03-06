/* eslint-disable require-jsdoc */
import React, {useEffect, useRef, useState} from 'react';
import {Breakpoint} from 'react-socks';
import Typewriter from 'typewriter-effect/dist/core';

// STYLED COMPONENTS
import {Body, Title, Row, Time, Text,
  Input, Form, TextArea, Button, Placeholder,
  Separator, Center, Col, RowStart, Menu,
} from '../../styles/contact/style';

// MOBILE
import Mobile from './mobile';

// FUNCTION IMPORT
import formatTime from '../../functions/formatTime';
import sendMessege from '../../functions/sendMessege';

// COMPONENTS IMPORT
import MenuComponent from '../../components/menu';
import Slider from '../../components/slider';

function Contact(props) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [company, setCompany] = useState('');
  const [messege, setMessege] = useState('');
  const [menu, setMenu] = useState(false);
  const [sent, setSent] = useState(false);
  const [sentMessege, setSentMessege] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const body = {
      name: name,
      email: email,
      phone: phone,
      company: company,
      messege: messege,
    };

    const response = await sendMessege(body);
    console.log(response);

    setName('');
    setEmail('');
    setPhone('');
    setCompany('');
    setMessege('');
    setSent(true);
    await delay(2000);
    setSent(false);
  };

  let i = 0;

  useEffect(() => {
    typeEffect();
  }, [sent]);

  const typeEffect = async () => {
    let text = '';
    let fullText = 'messege sent!';

    for(let i = 0; i < fullText.length; i++){
      text = text + fullText[i]
      setSentMessege(text)
      await delay(100)
    }
  };

  const delay = ms => new Promise(res => setTimeout(res, ms));

  return (
    <>
      {menu && <MenuComponent page={3} />}
      <Breakpoint customQuery='(min-width: 1200px)'>
        <Center>
          <Body>
            <Row>
              <Title
              >Contact</Title>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-end',
                }}>
                <Menu onClick={() => {
                  setMenu(true);
                }}>Menu</Menu>
                <Time>{formatTime(new Date())}</Time>
              </div>
            </Row>
            <Row>
              <Col>
                <Text>
            137 rue saint-ferdinand, suite 222 <br />
            montreal,quebec <br /> h4c2s6
                </Text>
                <Separator />
                <Form>
                  <Text>
                  We are here for you. Have a questions? or just want some more info? let us know, and we'll get back to as soon as we can!<br /><br />
                  Have a great day :)
                    </Text>
                  <RowStart>
                    <Input placeholder='Name' value={name} onChange={(e) => {
                      setName(e.target.value);
                    }} />
                    <Input placeholder='Email' value={email} onChange={(e) => {
                      setEmail(e.target.value);
                    }} />
                  </RowStart>
                  <RowStart>
                    <Input placeholder='Phone' value={phone} onChange={(e) => {
                      setPhone(e.target.value);
                    }} />
                    <Input placeholder='Company' value={company}
                      onChange={(e) => {
                        setCompany(e.target.value);
                      }} />
                  </RowStart>
                  <TextArea placeholder='Messege' value={messege}
                    onChange={(e) => {
                      setMessege(e.target.value);
                    }} />
                  {sent ? <Button onClick={(e) => {e.preventDefault()}}>{sentMessege}</Button> : <Button onClick={handleSubmit} type='submit'>submit</Button>}
                </Form>

              </Col>
              <Col>

                <Text>
            514-291-3094 <br />
            514-883-5100 <br />
            info@platinumshark.com <br />
                </Text>
                <Separator />

                <Slider />
              </Col>
            </Row>
          </Body>
        </Center>
      </Breakpoint>
      <Breakpoint customQuery='(max-width: 1200px)'>
        <Mobile />
      </Breakpoint>
    </>
  );
}

export default Contact;
