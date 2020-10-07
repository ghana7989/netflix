import { Link } from "react-router-dom";
import styled from "styled-components/macro";

export const Background = styled.div`
  display: flex;
  flex-direction: column;
  background: url(${({ src }) => (src ? `${src}` : 'https://i.imgur.com/7sDLcsY.jpg')}) top left / cover
    no-repeat;
    border-bottom: 8px solid #222;

  @media (max-width: 1100px) {
    ${({ dontShowOnSmallViewPort }) => dontShowOnSmallViewPort && `background: none;`}
  }
`;

export const Container = styled.div`
    display: flex;
    margin: 0 56px;
    height: 64px;
    padding: 18px 0;
    justify-content: space-between;
    align-items: center;
    a {
        display: flex;
    }
    @media (max-width: 1000px) {
        margin: 0 30px;
    }
`;
export const Logo = styled.img`
    height:32px;
    width:108px;
    margin-right:40px;
    @media (min-width:1449px){
        width:167px;
        height:45px
    }
`;
export const ButtonLink = styled(Link)`
    display:block;
    background-color:#e50914;
    width:84px;
    height:fit-content;
    color:white;
    border:none;
    font-size:15px;
    border-radius:3px;
    padding:8px 17px;
    cursor:pointer;
    text-decoration:none;
    box-sizing:border-box;
    &:hover{
        background-color:#f40612;
    }
`;