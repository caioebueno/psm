import styled from 'styled-components';

export const Body = styled.div`
    background-color: ${(props) => props.theme.secundary};
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    height: 80px;
`;

export const Text = styled.h1`
    margin: 5px;
    font-size: 30px;
    line-height: 40px;
    letter-spacing: 0.2em;
    color: ${(props) => props.theme.primary}
`;
