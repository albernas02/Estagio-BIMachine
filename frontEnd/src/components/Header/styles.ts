import styled from "styled-components";

export const HeaderContainer = styled.header`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 100%;
    height: 92px;

    border-bottom: 2px solid #00000F

`
export const ContentContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 1.56rem 7rem;

    h1 {
        font-weight: 600;
        font-size: 2rem;
    }

`

export const ImageContainer = styled.img`
max-width: 250px;
max-height: 300px;
`