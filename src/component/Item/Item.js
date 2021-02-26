import styled, {css}from "styled-components";
const Item = styled.div`
	height:1px;
	width:1px;
    margin: 0;
    padding: 0;
	${(props) =>
    css`
		background-color:rgb(${props.redEl},${props.greenEl},${props.blueEl})
    `}
`; 
export default Item;