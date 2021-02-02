/* eslint-disable max-len */
import styled from 'styled-components';

export const Body = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Image = styled.img`
    @media(max-width: 1200px) {
        max-width: 45vw;
        margin-bottom: 30px;
        margin-top: 30px;
        ${(props) => props.desk && `
            max-width: 90vw;
            width: 90vw;
        `}
        ${(props) => props.left && `
            align-self: flex-start;
        `}
        ${(props) => props.right && `
            align-self: flex-end;
        `}
    }
`;

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
    margin-bottom: 40px;
    @media(max-width: 1200px) {
        flex-wrap: wrap;
        width: 100vw;
        justify-content: space-evenly;
        margin-bottom: 5px;
    }
`;
