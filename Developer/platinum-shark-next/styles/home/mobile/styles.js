import styled from 'styled-components';
import {motion} from 'framer-motion';


export const Body = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    overflow-x: hidden;
`;

export const Title = styled.h1`
    margin: 0px;
    writing-mode: vertical-rl;
    text-orientation: upright;
    font-weight: 200;
    font-size: 28vh;
    color: ${(props) => props.theme.secundary};
    letter-spacing: 0.15em;
`;

export const Col = styled.div`
    display: flex;
    flex-direction: column;

`;

export const Link = styled.a`
    font-size: 36px;
    color: ${(props) => props.theme.secundary};
    writing-mode: vertical-rl;
    text-orientation: upright;
`;

export const LinkContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
    width: 50vw; 
    padding-right: 5vw;
`;

export const Time = styled.span`
    color: ${(props) => props.theme.timeColor};
    font-size: 12px;
    font-size: 11px;
    line-height: 11px;
    letter-spacing: 0.2em;
    position: absolute;
    top: 0;
    right: 0;
    margin: 15px;
`;

export const BlueText = styled.span`
    color: #A1E0D3;
`;

export const InfoText = styled.h3`
    margin: 0px;
    font-size: 18px;
    margin: 20px;
    line-height: 120%;
    color: ${(props) => props.theme.secundary};
`;

export const ThemeToggle = styled(motion.button)`
    background-color: ${(props) => props.theme.secundary};
    /* box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.5); */
    width: 20px;
    top: 0;
    right: 0;
    position: absolute;
    height: 20px;
    margin-top: 40px;
    margin-right: 35px;
    border-radius: 100px;
    cursor: ${(props) => props.theme.cursor};
    &:hover{
        cursor: ${(props) => props.theme.invertedCursor};
    }
    &:focus {
        box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.5);
    }
`;
