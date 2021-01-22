/* eslint-disable max-len */
import styled from 'styled-components';

export const Body = styled.div`

`;

export const Image = styled.img`
    @media(max-width: 1200px) {
        max-width: 100vw;
        margin-bottom: 30px;
        margin-top: 30px;
    }
`;

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
    margin-bottom: 40px;
    @media(max-width: 1200px) {
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-bottom: 100px;
    }
`;
