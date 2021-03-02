import React from 'react';
import Nav from './header/nav/index';
import 'normalize.css';
import GlobalStyle from '../../styles/global/';
import Header from './header';
import Footer from './footer/index';
import styled from '@emotion/styled';
import Scroll from './Scroll';

const MainWrapper = styled('div')`
  display: grid;
  min-height: 100vh;
  grid-template-rows: 70px auto auto;
  grid-template-areas:
    'header'
    'main'
    'footer';

  header {
    grid-area: header;
  }
  main {
    grid-area: main;
  }
  footer {
    grid-area: footer;
  }
`;

const Layout = ({ children, amazonPaapi }) => {
  return (
    <>
      <GlobalStyle />
      <MainWrapper>
        <main>{children}</main>
        <Header />

        <Footer />
      </MainWrapper>
      <Scroll showBelow={1000} />
    </>
  );
};

export default Layout;
