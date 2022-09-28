import React, { useState, useRef, useEffect } from 'react';
import { Breakpoint } from 'react-socks';
import useMouse from '@react-hook/mouse-position'
import Image from 'next/image'

// MOBILE
import Mobile from './mobile';

// STYLED COMPONENTS
import { Body, Time, Title, Row, Menu, Center, WorkItem, WorkWrapper, WorkTitle, WorkDesc, AbsoulteContainer, MobileImageContainer } from '../../styles/work/styles';

// FUNCTIONS IMPORT
import formatTime from '../../functions/formatTime';

// COMPONENTS IMPORT
import Footer from '../../components/footer';
import MenuComponent from '../../components/menu';
import WorkGrid from '../../components/workGrid';

const Item = ({
  title,
  desc,
  image,
  key
}) => {
  const [hover, setHover] = useState(false)
  const ref = useRef(null)
  const mouse = useMouse(ref, {
    enterDelay: 100,
    leaveDelay: 100,
  })

  useEffect(() => console.log(mouse), [mouse])

  return (
    <WorkItem
      ref={ref}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {mouse.x !== null && hover && (
        <AbsoulteContainer
          style={{
            left: `${mouse.x - 153}px`,
            top: `${mouse.y - 91.15}px`
          }}
        >
          <Image
            width={307}
            height={182.3}
            objectFit="cover"
            src={image}
            key={key}

          />
        </AbsoulteContainer>
      )}
      <WorkWrapper>
        <WorkTitle>{title}</WorkTitle>
        <WorkDesc>{desc}</WorkDesc>
      </WorkWrapper>
    </WorkItem>
  )
}

// eslint-disable-next-line require-jsdoc
function Work(props) {
  const [menu, setMenu] = useState(false);

  return (
    <>
      {menu && <MenuComponent page={1} />}
      <Breakpoint customQuery='(min-width: 1200px)'>
        <Center>
          <Body>
            <Row>
              <Title>Work</Title>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
                <Menu onClick={() => {
                  setMenu(true);
                }}>Menu</Menu>
                <Time>{formatTime(new Date())}</Time>
              </div>
            </Row>
            <Item
              title="Cluhbub"
              desc="A NEW DIRECTION FOR INDEPEDENT CREATORS"
              image="/clubhub.png"
              key={1}
            />
            <Item
              title="Monride"
              desc="PRIMIUM ELECTRIC BIKES FOR THOSE WITH A SENSE OF ADVENTURE"
              image="/monride.png"
              key={2}
            />
            <Item
              title="Creation thibaudeau"
              desc="A FAMILY JEWELRY TRADITION FOUNDED IN 1872"
              image="/creation.png"
              key={3}
            />
            <Item
              title="Kai"
              desc="LIVING AT ITS FULLEST"
              image="/kai.png"
              key={4}
            />
            <Item
              title="Survival leagues"
              desc="CAN YOU SURVIVE?"
              image="/survival.png"
              key={5}
            />
            <Item
              title="Laville"
              desc="WHERE FUNCTIONS DECIDES FORM"
              image="/laville.png"
              key={6}
            />
            <Item
              title="Esek"
              desc="GROW YOUR BUSINESS THROUGH TARGETED LEAD GENRATION"
              image="/esek.png"
              key={5}
            />
            <Item
              title="Fetus apes"
              desc="SOLANA NFT PROJECT"
              image="/fetus.png"
              key={6}
            />
            <Item
              title="Artsea"
              desc="NFT GALLARY - CAST ANYWHERE"
              image="/artesea.png"
              key={6}
            />
          </Body>
        </Center>
        <Footer work />
      </Breakpoint>
      <Breakpoint customQuery='(max-width: 1200px)'>
        <Mobile />
      </Breakpoint>
    </>
  );
}

export default Work;
