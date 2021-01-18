import styled from 'styled-components';
import {motion} from 'framer-motion';

export const Body = styled(motion.div)`
    width: 100%;
    position: fixed;
    display: flex;
    flex-direction:column;
    height: 50vh;
    background-color: ${(props) => props.theme.secundary};
    cursor: ${(props) => props.theme.invertedCursor};
    z-index: 300;
`;

export const LinkContainer = styled(motion.div)`
    width: 100%;
    height: 100%;
    align-items: center;
    display: flex;
    flex-direction: row;
    justify-content: center;
`;

export const Logo = styled.span`
    font-size: 48px;
    line-height: 48px;
    letter-spacing: 0.2em;
    color: ${(props) => props.theme.primary};
    margin: 20px;
`;

export const Link = styled(motion.a)`
    position: relative;
    font-size: 80px;
    margin: 20px;
    margin-left: ${(props) => props.marginLeft};
    color: ${(props) => props.theme.primary};
    &:hover{
        transition: all 0.2s ease;
        color: #A1E0D3;
    }
`;

export const ActiveLink = styled.a`
    position: relative;
    font-size: 80px;
    margin: 20px;
    margin-left: ${(props) => props.marginLeft};
    color: #A1E0D3;
`;

