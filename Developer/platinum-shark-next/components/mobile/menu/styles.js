import styled from 'styled-components';
import {motion} from 'framer-motion';

export const Body = styled(motion.div)`
    height: 100%;
    width: auto;
    display: flex;
    position: absolute;
    right: 0;
    z-index: 50;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    background-color: ${(props) => props.theme.secundary};
    padding: 30px;
`;

export const Link = styled.a`
    font-size: 30px;
    color: ${(props) => props.theme.primary};
    margin: 10px;
    writing-mode: vertical-rl;
    text-orientation: upright;
`;

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
`;

export const BlueText = styled.span`
    color: #A1E0D3;
`;

export const Close = styled.button`
    color: #A1E0D3;
    font-size: 20px;
    position: absolute;
    top: 0;
    right: 0;
    margin-right: 10px;
    margin-top: 10px;
    background-color: ${(props) => props.theme.secundary};
    font-family: 'Major Mono Display';
`;


