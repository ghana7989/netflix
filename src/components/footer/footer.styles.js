import styled from "styled-components/macro";

export const Container = styled.div`
    display:flex;
    height:40vh;
    padding:70px 56px;
    margin:auto;
    max-width:70vw;
    flex-direction:column;

    @media (max-width:800px){
        padding: 70px 30px;
    }
`;
export const Column = styled.div`
    display:flex;
    flex-direction:column;
    text-align:left;
`;
export const Row = styled.div`
    display: grid;
	grid-template-columns: repeat(auto-fill, minmax(210px, 1fr));
	gap: 20px;

	@media (max-width: 800px) {
		grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
	}
`;

export const Text = styled.p`
	color: #757575;
	margin-bottom: 40px;
`;
export const Links = styled.a`
    color: #757575;
	margin-bottom: 20px;
	font-size: 23px;
	text-decoration: none;
    @media screen and (max-width: 800px) {
	    font-size: 15px;
	}
`;
export const Title = styled.p`
    font-size: 25px;
	color: #757575;
	margin-bottom: 40px;
`;
export const Break = styled.p`
    flex-basis: 100%;
	height: 0;
`