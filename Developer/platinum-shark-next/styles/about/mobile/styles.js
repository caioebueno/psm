import styled from 'styled-components';

export const Video = styled.video`
    filter: grayscale(100%);
    margin-top: 50px;
`;

export const Text = styled.p`
    font-size: 18px;
    line-height: 14px;
    letter-spacing: 0.05em;
    color: ${(props) => props.theme.secundary};
`;

export const Body = styled.div`
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center
`;
