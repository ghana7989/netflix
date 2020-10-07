import styled from "styled-components/macro";

export const Container = styled.div`
    display:flex;
    justify-content:center;
    height:100%;
    flex-wrap:wrap;
    margin-top:20px;
    @media(max-width:800px){
        flex-direction:column;
        align-items:center;
    }
`
export const Input = styled.input`
    max-width:400px;
    width:100%;
    border:none;
    margin-top:10px;
    height:70px;
    padding:0 20px;
    box-sizing:border-box;
    @media (max-width:800px){
        height:50px;
        margin:0;
    }
`
export const Button = styled.button`
    display:flex;
    align-items:center;
    height:70px;
    margin-top:10px;
    background:#e50914;
    color:white;
    padding:0 26px;
    font-size:26px;
    border:none;
    cursor:pointer;

    &:hover{
        background:#f40612;

    }
    img{
        margin-left:10px;
        filter:brightness(0) invert(1);
        width:24px;

        @media (max-width:800px){
            width:16px
        }
    }
        @media (max-width:800px){
            height:50px;
            font-size:16px;
            margin-top:20px;
            font-weight:bold;
        }
`
export const Text = styled.p`
    font-size:20px;
    color:white;
    text-align:center;

    @media(max-width:800px){
        font-size:16px;
        line-height:22px;
    }
`;
export const Break = styled.div`
    flex-basis:100%;
    height:0;
`