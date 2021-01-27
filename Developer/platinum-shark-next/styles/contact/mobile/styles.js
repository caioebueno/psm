import styled from 'styled-components';

export const Input = styled.input`
    width: 80vw;
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
    align-items: center;
    margin-top: 40px;
    margin-bottom: 40px;
`;

export const TextArea = styled.textarea`
    width: 80vw;
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
    font-size: 20px;
    line-height: 144.5%;
    letter-spacing: 0.05em;
    font-family: 'Major Mono Display';
    align-self: flex-start;
    background-color: ${(props) => props.theme.primary};
    color: ${(props) => props.theme.secundary};
`;

export const Body = styled.div`
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Text = styled.p`
    font-size: 14px;
    line-height: 144.5%;
    letter-spacing: 0.05em;
    color: ${(props) => props.theme.secundary};
    width: 80vw;
`;

export const TextSpacer = styled.div`
    margin-top: 50px;
`;
