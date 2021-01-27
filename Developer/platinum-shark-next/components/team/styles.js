import styled from 'styled-components';
import {motion} from 'framer-motion';

export const PopUp = styled.div`
    position: absolute;
    padding: 50px;
    background-color: red;
    transition: all 0.3s ease;
    visibility: hidden;
    @media(max-width: 1200px) {
        display: none;
    }
`;

export const Body = styled.div`
    display: grid;
    grid-template-columns: 33.3% 33.3% 33.3%;
    grid-template-rows: 25vw 25vw;
    &:hover ${PopUp} {
        background-color: green;
    }
    @media(max-width: 1200px) {
        grid-template-columns: 100vw;
        grid-template-rows: 50vw 50vw 50vw 50vw 50vw 50vw;
    }
`;

export const MemberContainer = styled(motion.div)`
    width: 100%;
    height: 25vw;
    overflow: hidden;
    border: 1px solid black;
    ${(props) => props.side && `border-left: none; border-right: none;`}
    ${(props) => props.bottom && `border-top: none;`}
    display: flex;
    justify-content: center;
    align-items: center;
    @media(max-width: 1200px) {
        border-left: none;
        border-right: none;
        border-bottom: none;
        border-top: 1px solid black;
        height: 100%;
    }
`;

export const Text = styled.h3`
    font-size: 48px;
    color: ${(props) => props.theme.secundary};
    text-align: center;
    @media(max-width: 1200px) {
        font-size: 40px;
    }
`;

export const AnimatedBg = styled(motion.div)`
    width: 33vw;
    height: 25vw;
    background-color: ${(props) => props.theme.secundary};
    position: absolute;
    @media(max-width: 1200px) {
        display: none;
    }
`;
