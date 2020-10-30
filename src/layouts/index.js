import React from "react";
import Header from "@components/Header";
import { GlobalStyle } from '@styles';
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import {css} from 'emotion';
import favicon from '../../static/favicon.ico'
import Helmet from 'react-helmet'

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

  let useDark = location.pathname !== "/";
  return (
    <div>
      <Helmet>
        <link rel="icon" href={favicon} />
      </Helmet>
      <Header useDark={useDark} />
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