import styled from 'styled-components';

export const Body = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;  
    justify-content: space-between;
`;

export const Title = styled.h1`
    margin: 0px;
    writing-mode: vertical-rl;
    text-orientation: upright;
    color: ${(props) => props.theme.secundary};
    font-size: 72px;
    line-height: 72px;
    letter-spacing: 0.05em;
`;

export const Time = styled.span`
    color: ${(props) => props.theme.timeColor};
    font-size: 12px;
    font-size: 11px;
    line-height: 11px;
    letter-spacing: 0.2em;
    margin-top: 10px;
`;

export const Col = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    margin: 15px;
`;

export const Menu = styled.button`
    color: ${(props) => props.theme.secundary};
    background-color: ${(props) => props.theme.primary};
    font-family: 'Major Mono Display';
    font-size: 18px;
`;


