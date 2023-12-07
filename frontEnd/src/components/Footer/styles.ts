import styled from "styled-components";

export const FooterContainer = styled.header`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #00000F;
    width: 100%;
    height: 200px;

`
export const ContentContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    margin: 1.56rem 7rem;
    h1 {
        font-weight: 600;
        font-size: 2rem;
    }

    Button{
        background-color: #1E90FF;
    }

`

export const ImageContainer = styled.img`
max-width: 250px;
max-height: 300px;
`