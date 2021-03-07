import PropTypes from 'prop-types';
import React from 'react';
import { ThemeProvider } from '@emotion/react';
// Style
import 'normalize.css';
import styled from '@emotion/styled';
import GlobalStyle from '../../styles/global';
import theme from '../../styles/global/theme';
import mediaQueries from '../../styles/global/mediaQueries';
// Components
import Header from './header';
import Footer from './footer/index';
import Scroll from './Scroll';
import Cursor from './CustomCursor';
// Context
import { useGlobalStateContext, useGlobalDispatchContext } from '../../context/globalContext';

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

const Layout = ({ children }) => {
  const dispatch = useGlobalDispatchContext();
  const { cursorStyles } = useGlobalStateContext();

  const handleOnCursor = (cursorType) => {
    cursorType = (cursorStyles.includes(cursorType) && cursorType) || false;
    dispatch({ type: 'CURSOR_TYPE', cursorType });
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Cursor />
      <MainWrapper>
        <main>{children}</main>
        <Header handleOnCursor={handleOnCursor} />
        <Footer />
      </MainWrapper>
      <Scroll showBelow={1000} />
    </ThemeProvider>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
