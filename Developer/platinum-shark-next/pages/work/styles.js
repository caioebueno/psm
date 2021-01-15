import styled from 'styled-components';
import {motion} from 'framer-motion';

export const Body = styled.div`
    background-color: ${(props) => props.theme.primary};
    width: 100vw;
    height: auto;
    display: flex;
    flex-direction: column;
    padding: 45px;
    transition: all 0.5s ease;
`;

export const Menu = styled.button`
    color: ${(props) => props.theme.secundary};
    background-color: ${(props) => props.theme.primary};
    font-family: 'Major Mono Display';
    font-size: 20px;
    margin-top: 0px;
    &:hover{
            cursor: ${(props) => props.theme.cursor};
    }
`;


export const Title = styled(motion.h1)`
    font-size: 170px;
    color: ${(props) => props.theme.secundary};
    line-height: 110px;
    letter-spacing: 0.05em;
    margin-bottom: 210px;
    font-weight: 200;
`;

export const Time = styled.span`
    font-size: 14px;
    line-height: 14px;
    letter-spacing: 0.2em;
    margin-top: 5px;
    color: ${(props) => props.theme.timeColor};
    transition: all 0.5s ease;
`;

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
`;
