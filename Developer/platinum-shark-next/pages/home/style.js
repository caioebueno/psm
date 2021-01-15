import styled from 'styled-components';
import {motion} from 'framer-motion';

export const Body = styled.div`
    background-color: ${(props) => props.theme.primary};
    width: 100vw;
    height: 100vh;
    padding: 45px;
    transition: all 0.5s ease;
`;

export const Title = styled.h1`
    font-size: 240px;
    line-height: 240px;
    letter-spacing: 0.2em;
    font-weight: 200;
    color: ${(props) => props.theme.secundary};
    transition: all 0.5s ease;
`;

export const Time = styled.span`
    font-size: 14px;
    line-height: 14px;
    letter-spacing: 0.2em;
    color: ${(props) => props.theme.timeColor};
    transition: all 0.5s ease;
`;

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    height: 48%;
`;

export const RowCenter = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    height: 26%;
`;

export const RowEnd = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;
    height: 26%;
`;

export const Link = styled.a`
    font-size: 96px;
    line-height: 96px;
    font-weight: 200;
    color: ${(props) => props.theme.secundary};
    letter-spacing: 0.05em;
    transition: all 0.5s ease;
    &:hover{
        transition: all 0.2s ease;
        color: #A1E0D3
    }
`;

export const Col = styled.div`
    align-self: stretch;
    display: flex;
    align-items: center;
    flex-direction: column;
`;

export const ThemeToggle = styled(motion.button)`
    background-color: #D3D2D2;
    box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.5);
    margin-left: 410px;
    width: 20px;
    height: 20px;
    border-radius: 100px;
    cursor: ${(props) => props.theme.cursor};
    &:hover{
        cursor: ${(props) => props.theme.invertedCursor};
    }
    &:focus {
        box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.5);
    }
`;

export const Description = styled.p`
    transition: all 0.5s ease;
    font-size: 14px;
    line-height: 21px;
    letter-spacing: 0.2em;
    color: ${(props) => props.theme.timeColor};
`;


