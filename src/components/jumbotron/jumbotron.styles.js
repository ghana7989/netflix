import styled from "styled-components/macro";

export const Inner = styled.div`
    display:flex;
    align-items:center;
    flex-direction:${props => props.direction} ;
    justify-content: space-between;
    max-width: 90vw;
    margin:auto;
    width:100%;

    @media(max-width:800px){
    flex-direction:column;
    max-width: 100vw;
    width:100%;
    }
`;
export const Pane = styled.div`
    width: 50%;
    @media (max-width:800px){
        width: 100%;
        padding:0 45px;
        text-align:start;
        max-width:100vw;

}
`;
export const Title = styled.h1`
    font-size: 50px;
    line-height: 1.1;
    margin-bottom: 10px;

@media (max-width:800px){
    font-size: 30px;
    width:100%;
}
`;
export const SubTitle = styled.h2`
    font-size: 26px;
	font-weight: normal;
	line-height: normal;
@media (max-width: 800px) {
	font-size: 20px;
	line-height: 1.6;
    width:100%;
}
`;
export const Image = styled.img`
    max-width:100%;
    height:auto;
    display:block;
    margin: 0 auto;
   @media (max-width: 800px) {
    margin:-10px auto;
}
`;
export const Item = styled.div`
    display: flex;
    border-bottom:8px solid #222;
    padding: 50px 5%;
    color: white;
    overflow: hidden;
`;
export const Container = styled.div`
    @media(max-width:800px){
        ${Item}:last-of-type h2{
            margin-bottom:50px;
        }
    }
`;