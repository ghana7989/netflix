import { Link as ReactRouterLink } from "react-router-dom";
import styled from "styled-components/macro";

export const Background = styled.div`
  display: flex;
  flex-direction: column;
  background: url(${({ src }) => (src ? `${src}` : 'https://i.imgur.com/7sDLcsY.jpg')}) top left / cover
    no-repeat;

  @media (max-width: 800px) {
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
export const ButtonLink = styled(ReactRouterLink)`
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
export const Feature = styled(Container)`
    padding:150px 0 500px 0;
    flex-direction:column;
    line-height:normal;
    width:50%;

    @media (max-width:800px){
        display:none;
    }    
`
export const Text = styled.p`
    color:white;
    font-size:22px;
    line-height:normal;
    text-shadow:2px 2px 4px rgba(0,0,0,0.45);
    margin: 0;
`
export const FeatureCallout = styled.h2`
    color:white;
    font-size:50px;
    font-weight:bold;
    align-self: flex-start;
    line-height:normal;
    text-shadow:2px 2px 4px rgba(0,0,0,0.45);
    margin: 0;
    margin-bottom:20px;
`;
export const Link = styled.p`
    color:white;
    font-size:22px;
    text-decoration:none;
    margin-left:40px;
    margin-right:30px;
    font-weight:${({ active }) => (active === "true" ? "700" : "normal")};
    cursor:pointer;
    user-select: none;
    &:hover {
        font-weight:bold;
    }
    &:last-of-type{
        margin-right:0;
    }
`;
export const Group = styled.div`
    display: flex;
    align-items: center;

`;
export const Picture = styled.button`
    background:url(${({ src }) => src}) no-repeat;
    background-size:contain;
    border:0;
    width:22px;
    height:22px;
    cursor:pointer;
    margin-right:10px;
`
export const Dropdown = styled.div`
    display:none;
    background-color:black;
    position:absolute;
    padding:10px;
    width:100px;
    top:20px;
    right:10px;

    ${Group}:last-of-type ${Link}{
        cursor:pointer;
    }
    ${Group}{
        margin-bottom:10px;

        &:last-of-type{
            margin-bottom:0
        }
        ${Link},${Picture}{
            cursor:default;
        }
    }
    p{
        font-size:12px;
        margin-top:0;
        margin-bottom:0;
    }
`

export const Profile = styled.div`
    display:flex;
    align-items: center;
    margin-left:20px;
    position:relative;

    button{
        cursor:pointer;
    }
    &:hover > ${Dropdown}{
        display:flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
    }
`
export const Search = styled.div`
    display:flex;
    align-items: center;

    svg{
        color: white;
        cursor: pointer;
    }
    @media (max-width:700px){
        display:none;
    }
`;

export const SearchIcon = styled.button`
    cursor:pointer;
    background-color:transparent;
    border:0;
    outline:none;
    &:focus,&:active{
        outline:none;
    }
    img{
        filter: brightness(0) invert(1);
        width:16px;
    }
`
export const SearchInput = styled.input`
    background-color:#44444459;
    color:white;
    border:1px solid white;
    transition: width 0.5s;
    height:30px;
    font-size:14px;
    margin-left:${({ active }) => active === true ? "10px" : 0};
    padding:${({ active }) => active === true ? "0 10px" : 0};
    opacity:${({ active }) => active === true ? 1 : 0};
    width:${({ active }) => active === true ? "200px" : 0};

`;
export const PlayButton = styled.button`
    align-self: flex-start;
    box-shadow:0 0.6vw 1vw -0.4vw rgba(0, 0, 0, 0.35);
    background-color: #e6e6e6;
    color:#000;
    font-weight:bold;
    padding:10px 25px;
    border-radius: 5px;
    max-width:130px;
    font-size:20px;
    margin-top:30px;
    cursor:pointer;
    transition: background-color .3s linear;

    &:hover{
        background-color:#ff1e1e;
        color:white;
    }
`;