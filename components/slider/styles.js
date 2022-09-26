import styled from 'styled-components';

export const Body = styled.video`
    width: 600px;
    height: 950px;
    margin-bottom: 100px;
    filter: grayscale(100%);
    object-fit: cover;
    @media(max-width: 1200px){
        width: 80vw;
        height: 500px;
    }
`;
