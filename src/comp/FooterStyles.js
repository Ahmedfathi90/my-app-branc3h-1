import styled from 'styled-components';

export const Box = styled.div`
padding-top: 10px;
background: black;
position: absolute;
bottom: 0;
width: 100%;


@media (max-width: 1000px) {
  padding-top: 10px;
	padding: 20px 20px;
}
`;

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	max-width: 1000px;
	margin: 25px auto;
	/* background: red; */
`

export const Column = styled.div`
display: flex;
flex-direction: column;
text-align: left;
`;

export const Row = styled.div`
display: grid;
grid-template-columns: repeat(auto-fill,
						minmax(185px, 1fr));
grid-gap: 20px;
@media (max-width: 1000px) {
grid-template-columns: repeat(auto-fill,
minmax(200px, 1fr));
}
`;

 
export const Brag = styled.p`
color: #fff;
font-size: 18px;
text-decoration: none;
display: flex;
justify-content: center;
&:hover {
	color: green;
	transition: 200ms ease-in;
}
`;
 

export const Heading = styled.p`
font-size: 22px;
color: #fff;
margin-bottom: 25px;
font-weight: bold;
display: flex;
justify-content: center;
`;
