import React from "react";
import Header from "@components/Header";
import { GlobalStyle } from '@styles';
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import {css} from 'emotion';

const enter = css`
  opacity: 0.01;
`;

const enterActive = css`
  opacity: 1;
  transition: opacity 250ms ease-in;
`;

const exit = css`
  opacity: 0;
`;

const exitActive = css`
  opacity: 0.01;
  transition: opacity 250ms ease-out;
`;

const Layout = ({ location, title, children }) => {
  return (
    <div>
      <Header />
      <GlobalStyle location={location}/>
      <TransitionGroup>
      	<CSSTransition key={location.pathname} classNames={{ enter, enterActive, exit, exitActive }} timeout={1000} >
      	<div>
      		{children}
      	</div>
      	</CSSTransition>
      </TransitionGroup>
    </div>
  )
}

export default Layout;