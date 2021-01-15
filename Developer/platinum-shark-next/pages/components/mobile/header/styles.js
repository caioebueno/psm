import styled from 'styled-components';

export const Body = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;  
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
    position: absolute;
    top: 0;
    right: 0;
    margin: 15px;
`;
