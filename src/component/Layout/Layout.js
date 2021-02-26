import styled from "styled-components";
import React from 'react'
import Item from '../Item/Item'

const Wrapper = styled.div`
	width:100%;
`;
const Container = styled.div`
	height:128px;
    width:256px;
    margin: 0;
    padding: 0;
    display:flex;
	flex-wrap: wrap;
`
function Layout(){
    let eightSteps = []
    let unOrderEightSteps = []
    const  maxLength = 33;
    let totalItems = [];
    for(let i=0;i<=256 ;i+=8){
        eightSteps.push(i)
    }
    for (let i= 0 ; i < maxLength ;i++ ){
        const randomIndex = Math.floor(Math.random() * Math.floor(eightSteps.length));
        let randomValue = eightSteps[randomIndex]
        unOrderEightSteps.push(randomValue)
        eightSteps.splice(randomIndex,1)
    }
    for(let i=0;i< maxLength ;i++){
        for(let j=0;j< maxLength ;j++){
            for(let k=0;k< maxLength ;k++){
                totalItems.push(<Item redEl={unOrderEightSteps[i]} greenEl={unOrderEightSteps[j]} blueEl={unOrderEightSteps[k]}/>);
            }
        }
    }
    return (
		<Wrapper>
			<Container><Item redEl={unOrderEightSteps[1]} greenEl={unOrderEightSteps[1]} blueEl={unOrderEightSteps[1]}/></Container>
		</Wrapper>
        )
    }

export default Layout;


 