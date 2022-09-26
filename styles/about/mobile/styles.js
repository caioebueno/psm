import styled from 'styled-components';

export const Video = styled.video`
    filter: grayscale(100%);
    margin-top: 50px;
`;

export const Text = styled.p`
    font-size: 40px;
    align-self: flex-start;
    margin: 36px;
    line-height: 14px;
    letter-spacing: 0.05em;
    margin-top: 60px;
    color: ${(props) => props.theme.secundary};
`;

export const Body = styled.div`
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const TinyText = styled.p`
    color: ${(props) => props.theme.secundary};
    font-size: 15px;
    line-height: 136.5%;
    letter-spacing: 0.05em;
    margin: 10px;
`;

export const MediumText = styled.p`
    transition: all 0.5s ease;
    font-size: 20px;
    line-height: 136.5%;
    letter-spacing: 0.05em;
    color: ${(props) => props.theme.timeColor};
    font-weight: 200;
    margin: 10px;
    margin-bottom: 30px;
`;

export const WorkContainer = styled.div`
    width: 80vw;
    height: 80vw;
    border: 1px solid ${(props) => props.theme.secundary};
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
`;

export const WorkText = styled.h3`
    margin: 0px;
    font-size: 25px;
    color: ${(props) => props.theme.secundary};
    text-align: center;
`;
