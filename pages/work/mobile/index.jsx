/* eslint-disable require-jsdoc */
import React, { useState, useEffect, useRef } from 'react';

// COMPONENTS IMPORT
import Header from '../../../components/mobile/header';
import Menu from '../../../components/mobile/menu';
import Footer from '../../../components/mobile/footer';
import WorkGrid from '../../../components/workGrid';
import useMouse from '@react-hook/mouse-position';

import { WorkItem, AbsoulteContainer, WorkWrapper, WorkTitle, WorkDesc, MobileImageContainer } from '../../../styles/work/styles'
import Image from 'next/image';

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
            src={image}
            key={key}

          />
        </AbsoulteContainer>
      )}
      <WorkWrapper>
        <WorkTitle>{title}</WorkTitle>
        <WorkDesc>{desc}</WorkDesc>
        <MobileImageContainer>
        <Image
          width={160}
          height={95}
          src={image}
          key={key}
        />
      </MobileImageContainer>
      </WorkWrapper>
      
    </WorkItem>
  )
}

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
        <div 
          style={{
            marginTop:24
          }}
        />
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
        <Footer work />
      </div>
    </>
  );
}

export default Work;
