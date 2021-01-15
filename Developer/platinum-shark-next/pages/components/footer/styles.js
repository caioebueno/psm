import styled from 'styled-components';
import { motion } from "framer-motion"; 

export const Body = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content:space-between;
    flex-direction: column;
    background-color: ${(props) => props.theme.secundary};
    padding: 15px;
`;

export const Text = styled.p`
    font-size: 34px;
    line-height: 52px;
    letter-spacing: 0.05em;
    color: ${(props) => props.theme.primary};
    margin: 0px;
    margin-bottom: 20px;
`;

export const BlueText = styled.a`
    color: #A1E0D3 !important;
`;

export const Logo = styled.span`
    font-size: 48px;
    line-height: 48px;
    letter-spacing: 0.2em;
    color: ${(props) => props.theme.primary};
`;

export const Gif = styled.img`
    width: 400px;
    opacity: 0.8;
    filter: grayscale(100%);
`;

export const Center = styled.div`
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 100px;
    margin-bottom: 100px;
`;
