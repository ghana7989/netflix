import styled from "styled-components/macro";

export const Container = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    text-align:center;
    padding:165px 45px;
    user-select:none;
`
export const Title = styled.h1`
    color:white;
    max-width:640px;
    font-size:50px;
    font-weight:500;
    margin:auto;

    @media (max-width:600px){
        font-size:35px;
    }
`;

export const SubTitle = styled.h2`
 color:white;
    font-size:26px;
    font-weight:normal;
    margin: 16px auto;

    @media (max-width:600px){
        font-size:18px;
    }
`