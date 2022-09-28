import styled from 'styled-components';
import {motion} from 'framer-motion';

export const Body = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    height: auto;
    align-items: center;
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
    margin-top: 40px;
    &:hover{
            cursor: ${(props) => props.theme.cursor};
    }
`;


export const Title = styled(motion.h1)`
    font-size: 170px;
    color: ${(props) => props.theme.secundary};
    line-height: 110px;
    letter-spacing: 0.05em;
    margin-top: 40px;
    margin-bottom: 210px;
    font-weight: 200;
`;

export const Time = styled.span`
    font-size: 14px;
    line-height: 14px;
    letter-spacing: 0.2em;
    margin-top: 5px;
    color: ${(props) => props.theme.timeColor};
    transition: all 0.5s ease;
`;

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    width: 1300px;
`;

export const AbsoulteContainer = styled.div`
    position: absolute;
    opacity: 0;
    transition: all 0.3s ease-out;
`

export const WorkItem = styled.div`
    display: grid;
    place-items: center;
    border-top: 1px solid ${(props) => props.theme.secundary};
    width: 100%;
    position: relative;
    &:hover ${AbsoulteContainer} {
        opacity: 1;
    }
`

export const WorkWrapper = styled.div`
    width: 1300px;
    display: flex;
    height: 350px;
    padding-top: 48px;
    flex-direction: column;
    align-items: flex-start;
    @media (max-width: 1200px) {
        width: 100%;
        height: unset;
        padding-bottom: 48px;
        padding-inline: 15px;
    }
`

export const WorkTitle = styled.span`
    font-family: 'Major Mono Display';
    font-size: 36px;
    margin-bottom: 24px;
    color: ${(props) => props.theme.secundary};
`

export const WorkDesc = styled.span`
    font-family: 'Oriya Sangam MN';
    color: ${(props) => props.theme.secundary};
    font-size: 24px;
    font-weight: bold;
    line-height: 160.5%;
    width: 375px;
    @media (max-width: 1200px) {
        width: minmax(70%, 480px);
    }
`
export const MobileImageContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    width: 100%;
    padding-block: 24px;
`
