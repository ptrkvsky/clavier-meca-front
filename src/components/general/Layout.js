import React from 'react';
import Nav from './header/nav/index';
import 'normalize.css';
import GlobalStyle from '../../styles/global/';
import Header from './header';
import Footer from './footer/index';
import styled from '@emotion/styled';

const MainWrapper = styled('div')`
  display: grid;
  min-height: 100vh;
  grid-template-rows: 70px auto 274px;

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

const Layout = ({ children }) => (
  <>
    <GlobalStyle />
    <MainWrapper>
      <main>{children}</main>
      <Header />
      <Footer />
    </MainWrapper>
  </>
);

export default Layout;
