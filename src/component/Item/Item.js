import styled, {css} from "styled-components";


// function Colorful()=>(
//     let red = 0
// )
const Item = styled.div`
    margin: 0;
    padding: 0;
    border:1px solid black;
    ${(props) =>
    css`
      color: ${[props.red],props.green,props.blue};
    `}
`;


export default Item;
