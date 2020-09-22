import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components'
import { media } from "@styles";

const HamburgerButton= styled.button`
	display:none;
	background-color: transparent;
	border: 0;

	${media.desktop`
		display: block;
		position: relative;
		z-index: 10;
	`};
`;

const HamburgerContainer = styled.div`
	display: inline-block;
	position: relative;
	width: 30px;
	height: 24px;
	top: -5px;
`

const Hamburger = styled.div`
	position: absolute;
    top: 50%;
    right: 0;
    width: 30px;
    height: 2px;
    border-radius: 2px;
    background-color: #fff;

    &:before, &:after {
      content: '';
      display: block;
      position: absolute;
      left: auto;
      right: 0;
      width: 30px;
      height: 2px;
      border-radius: 2px;
      background-color: #fff;
    }
    &:before{
      	width: 120%;
      	top: -10px;
    }
    &:after {
      	width: 80%;
      	bottom: -10px;
    }
`


const MenuHamburgerButton = () =>{
	return ( 
		<HamburgerButton>
			<HamburgerContainer>
				<Hamburger/>
			</HamburgerContainer>
		</HamburgerButton>
	);
} 

export default MenuHamburgerButton;