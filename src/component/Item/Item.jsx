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
		return(
			<div className = "Item" style={{backgroundColor:`rgb(${redEl},${greenEl},${blueEl})`}}/>
		)
	}
}
export default Item;