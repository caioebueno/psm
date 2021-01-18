import styled from 'styled-components';

export const LineZero = styled.div`
    background-color: transparent;
    width: 300px;
    height: 50px;
    transform: skew(60deg, -30deg) scaleY(0.667);
    margin-left: -29px;
    overflow: hidden;

`;

export const LineOne = styled.div`
    background-color: grey;
    width: 300px;
    height: 50px;
    transform: skew(0deg, -30deg) scaleY(1.337);
    overflow: hidden;

`;

export const LineTwo = styled.div`
    background-color: black;
    width: 300px;
    height: 50px;
    transform: skew(60deg, -30deg) scaleY(0.667);
    margin-left: 29px;
    overflow: hidden;
`;

export const LineThree = styled.div`
    background-color: grey;
    width: 300px;
    height: 50px;
    transform: skew(0deg, -30deg) scaleY(1.337);
    margin-left: 58px;
    overflow: hidden;

`;

export const LineFive = styled.div`
    background-color: transparent;
    width: 300px;
    height: 50px;
    transform: skew(60deg, -30deg) scaleY(0.667);
    overflow: hidden;
    margin-left: 87px;
`;

export const Text = styled.p`
    margin: 0px;
    color: white;
    font-size: 45px;
    transition: all 0.5s ease-in-out;
    line-height: 48px;
`;

export const BlueText = styled.span`
    color: #A1E0D3;
`;

export const Body = styled.div`
    &:hover ${Text} {
        transform: translate(0, -50px);
    }
`;


