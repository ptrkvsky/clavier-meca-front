import React from 'react';
import Nav from './header/nav/index';
import 'normalize.css';
import GlobalStyle from '../../styles/global/';
import Header from './header';
import Footer from './Footer';
import styled from '@emotion/styled';

const MainWrapper = styled('div')`
  display: grid;
  min-height: 100vh;
  grid-template-rows: 70px auto 70px;
`;

const Layout = ({ children }) => (
  <>
    <GlobalStyle />
    <MainWrapper>
      <Header />
      <main>{children}</main>
      <Footer />
    </MainWrapper>
  </>
);

export default Layout;
