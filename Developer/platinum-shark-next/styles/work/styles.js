import styled from 'styled-components';
import {motion} from 'framer-motion';

export const Body = styled.div`
    width: 1300px;
    height: auto;
    transition: all 0.5s ease;
`;

export const Center = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Menu = styled.button`
    color: ${(props) => props.theme.secundary};
    background-color: ${(props) => props.theme.primary};
    font-family: 'Major Mono Display';
    font-size: 20px;
    margin-top: 40px;
    &:hover{
            cursor: ${(props) => props.theme.cursor};
    }
`;


export const Title = styled(motion.h1)`
    font-size: 170px;
    color: ${(props) => props.theme.secundary};
    line-height: 110px;
    letter-spacing: 0.05em;
    margin-top: 40px;
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
