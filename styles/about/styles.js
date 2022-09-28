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
    margin-bottom: 210px;
    font-weight: 200;
`;

export const Time = styled.span`
    font-size: 14px;
    line-height: 14px;
    margin-top: 10px;
    letter-spacing: 0.2em;
    color: ${(props) => props.theme.timeColor};
    transition: all 0.5s ease;
`;

export const Text = styled.p`
    transition: all 0.5s ease;
    max-width: 100vw;
    font-size: 40px;
    line-height: 55px;
    letter-spacing: 0.2em;
    color: ${(props) => props.theme.timeColor};
    margin: 10px;
`;

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
`;

export const Outdoor = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-bottom: 50px;
`;

export const WorkItem = styled.div`
    width: 387px;
    height: 331px;
    border: 1px solid ${(props) => props.theme.secundary};
    margin-top: 50px;
    margin-bottom: 70px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const WorkItemText = styled.h3`
    font-size: 40px;
    line-height: 48px;
    text-align: center;
    letter-spacing: 0.05em;
`;

export const SmallWorkItemText = styled.h3`
    font-size: 30px;
    line-height: 48px;
    text-align: center;
    letter-spacing: 0.05em;
`;

export const SubTitle = styled.h2`
    font-size: 64px;
    line-height: 64px;
    letter-spacing: 0.05em;
    color: ${(props) => props.theme.secundary};
`;

export const Gif = styled.img`
    width: 650px;
`;

export const InvertedGif = styled.img`
    width: 650px;
    transform: scaleX(-1);
`;

export const ColEnd = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
`;

export const TinyText = styled.p`
    color: ${(props) => props.theme.secundary};
    font-size: 18px;
line-height: 136.5%;
letter-spacing: 0.05em;
    margin: 10px;
`;

export const MediumText = styled.p`
    transition: all 0.5s ease;
    font-size: 35px;
    line-height: 136.5%;
    letter-spacing: 0.05em;
    color: ${(props) => props.theme.timeColor};
    font-weight: 200;
`;

export const Col = styled.div`
    display: flex;
    flex-direction: column;
    ${({width}) => width && `width: ${width}px`}
`;

export const SmallText = styled.h5`
    margin: 0px;
    color: ${(props) => props.theme.secundary};
    font-size: 16px;
    margin-bottom: 5px;
    text-align: right;
`;

export const Video = styled.video`
    filter: grayscale(1);
    margin-bottom: 100px;
`;

