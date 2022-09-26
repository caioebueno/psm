import styled from 'styled-components';
import {motion} from 'framer-motion';

export const Text = styled(motion.h3)`
    font-size: 40px;
    line-height: 48px;
    text-align: center;
    letter-spacing: 0.05em;
    z-index: 2;
    color: ${(props) => props.theme.secundary};
    ${(props) => props.color === false && `
        color: ${(props) => props.theme.primary};
    `}
`;


export const SmallText = styled(motion.h3)`
    font-size: 30px;
    line-height: 48px;
    text-align: center;
    letter-spacing: 0.05em;
    z-index: 2;
    color: ${(props) => props.theme.secundary};
`;

export const Body = styled(motion.div)`
    width: 387px;
    height: 331px;
    border: 1px solid ${(props) => props.theme.secundary};
    margin-top: 10px;
    margin-bottom: 10px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    position: relative;
    &:hover ${Text} {
        color: ${(props) => props.theme.primary};
    }
    &:hover ${SmallText} {
        color: ${(props) => props.theme.primary};
    }
`;



export const AnimatedBg = styled(motion.div)`
    width: 387px;
    height: 331px;
    background-color: ${(props) => props.theme.secundary};
    position: absolute;
`;

export const AnimatedLetter = styled(motion.span)`
    display: inline-block;
`;


