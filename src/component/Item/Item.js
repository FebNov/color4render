import React from "react";
import './Item.css';
class Item extends React.Component	{
	constructor(props){
	super(props);
	this.state = {
		redEl : props.redEl,
		greenEl : props.blueEl,
		blueEl :props.blueEl
    }
  }

  render(){
	const {redEl,greenEl,blueEl} = this.state
	return	(
		<div className = "Item" style={{backgroundCorlor:`rgb(${redEl},${greenEl},${blueEl})`}}>
		</div>
		)
 	 }
}
export default Item;

// const Item = styled.div`
// 	height:1px;
// 	width:1px;
//     margin: 0;
//     padding: 0;
// 	/* ${(props) =>
//     css`
// 		background-color:rgb(${props.redEl},${props.greenEl},${props.blueEl})
//     `} */
// `;