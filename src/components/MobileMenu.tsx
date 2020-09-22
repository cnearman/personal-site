import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components'
import { media } from "@styles";
import MenuHamburgerButton from "@components/MenuHamburgerButton";
import { navigationLinks }  from "@config";
import { useOnClickOutside } from "@hooks";
import resume from "@assets/Resume-Chris-Nearman.pdf";

const MenuContainer = styled.div`
	display:none;
	${media.desktop`
		display: block;
	`};
`;

const MenuSidebar = styled.aside`
	display:none;

	${media.desktop`
		display: flex;
		position: fixed;
		top: 0;
		bottom: 0;
		right: 0;
		height: 100vh;
		width: min(75vw, 400px);
		outline: 0;
		background-color: #000000BB;
		box-shadow: -10px 0px 30px -15px light-gray;
		z-index: 9;
		padding: 30px;
    	transform: translateX(${props => (props.menuOpen ? 0 : 100)}vw);
    	visibility: ${props => (props.menuOpen ? 'visible' : 'hidden')};
	    transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
	`};

	  nav {
	    width: 100%;
	    flex-direction: column;
	    color: black;
	    text-align: center;
	  }

  	ol {
    	padding: 0;
    	margin: 0;
    	list-style: none;
    	width: 100%;
    	
    	li {
    	  position: relative;
    	  margin: 0 auto 20px;
    	  font-size: clamp(4em, 4vw, 8em);

    	  @media (max-width: 600px) {
    	    margin: 0 auto 10px;
    	  }
        }
	    a {
	      width: 100%;
	      padding: 3px 20px 20px;		  	
	      color: #fff;
		  box-shadow: none;
		  letter-spacing: 2px;
		  text-decoration: none;
	    }
	}
`;

const ResumeLink = styled.a`
  	color: #fff;
  	box-shadow: none;
  	letter-spacing: 2px;
  	text-decoration: none;
   	font-size: clamp(4em, 4vw, 8em);
`

const MobileMenu = () => {

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const navRef = useRef();

  const wrapperRef = useRef();
  useOnClickOutside(wrapperRef, () => setMenuOpen(false));

	return (
		<div ref={wrapperRef}>
		<MenuContainer onClick={toggleMenu} menuOpen={menuOpen}>
			<MenuHamburgerButton />
		</MenuContainer>
		<MenuSidebar menuOpen={menuOpen} aria-hidden={!menuOpen} tabIndex={menuOpen ? 1 : -1}>
          <nav ref={navRef}>
            {navigationLinks && (
              <ol>
                {navigationLinks.map(({ url, name }, i) => (
                  <li key={i}>
                    <Link onClick={toggleMenu} to={url}>{name}</Link>
                  </li>
                ))}
              </ol>
            )}
			<ResumeLink href={resume} target='_blank'>Resume</ResumeLink>
          </nav>
        </MenuSidebar>
		</div>
	)
}

export default MobileMenu;