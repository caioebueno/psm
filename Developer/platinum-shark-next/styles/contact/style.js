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
    margin-top: 30px;
    &:hover{
            cursor: ${(props) => props.theme.cursor};
    }
`;


export const Title = styled(motion.h1)`
    font-size: 170px;
    color: ${(props) => props.theme.secundary};
    line-height: 110px;
    letter-spacing: 0.05em;
    margin-top: 30px;
    margin-bottom: 25vh;
`;

export const Time = styled.span`
    font-size: 14px;
    line-height: 14px;
    margin-top: 5px;
    letter-spacing: 0.2em;
    color: ${(props) => props.theme.timeColor};
    transition: all 0.5s ease;
`;

export const Text = styled.p`
    transition: all 0.5s ease;
    font-size: 18px;
    line-height: 21px;
    letter-spacing: 0.2em;
    color: ${(props) => props.theme.secundary};
    margin: 10px;
`;

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
`;

export const RowStart = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
`;

export const Separator = styled.div`
    width: 1px;
    height: 25vh;
    background-color: transparent;
`;

export const Input = styled.input`
    width: 250px;
    padding-top: 15px;
    padding-bottom: 15px;
    padding-left: 15px;
    border: 1px solid ${(props) => props.theme.secundary};
    background-color: ${(props) => props.theme.primary};
    color: ${(props) => props.theme.secundary};
    margin: 10px;
    &:focus {
        outline: none;
    }
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: 'flex-start';
    justify-content: 'flex-start';
`;

export const TextArea = styled.textarea`
    width: 520px;
    height: 280px;
    padding: 15px;
    border: 1px solid ${(props) => props.theme.secundary};
    background-color: ${(props) => props.theme.primary};
    color: ${(props) => props.theme.secundary};
    margin: 10px;
    &:focus {
        outline: none;
    }
`;

export const Button = styled.button`
    margin: 10px;
    font-size: 24px;
    align-self: flex-start;
    line-height: 144.5%;
    letter-spacing: 0.05em;
    font-family: 'Major Mono Display';
    background-color: ${(props) => props.theme.primary};
    color: ${(props) => props.theme.secundary};
`;

export const Placeholder = styled.div`
    width: 650px;
    height: 800px;
    border: 1px solid ${(props) => props.theme.secundary};
    margin: 10px;
    margin-bottom: 20px;
`;

export const Col = styled.div`
    display: flex;
    flex-direction: column;
`;

