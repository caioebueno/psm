import styled from 'styled-components';

export const Body = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const Title = styled.h1`
    margin: 0px;
    writing-mode: vertical-rl;
    text-orientation: upright;
    font-weight: 200;
    font-size: 210px;
    color: ${(props) => props.theme.secundary};
    letter-spacing: 0.15em;
`;

export const Col = styled.div`
    display: flex;
    flex-direction: column;

`;

export const Link = styled.a`
    font-size: 36px;
    color: ${(props) => props.theme.secundary};
    writing-mode: vertical-rl;
    text-orientation: upright;
`;

export const LinkContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
    width: 50vw; 
    padding-right: 5vw;
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

export const BlueText = styled.span`
    color: #A1E0D3;
`;


