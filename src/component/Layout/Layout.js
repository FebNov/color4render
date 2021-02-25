import styled from "styled-components";
import React from 'react'
import Item from '../Item/Item'

const Wrapper = styled.div`
    height:128px;
    width:256px;
    margin: 0;
    padding: 0;
    display:flex;
`;
function Layout(){
	let totalItem = [];
    for (let i = 0; i < 3 ; i++) {
        totalItem.push(i);
  };
    return (
		<Wrapper>
			{totalItem}
		</Wrapper>
        )
    }

export default Layout;
