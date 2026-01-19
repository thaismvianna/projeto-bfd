import styled from "styled-components";


export const AboutMeContainer = styled.div `
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    @media (max-width: 768px) {
        flex-direction: column;
        margin: 20px;
    }

    `

    export const Centrtalize = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    max-width: 800px;
    margin: 0 auto;`