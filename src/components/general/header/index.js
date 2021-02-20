import React from 'react';
import styled from '@emotion/styled';
import NavContainer from './nav/NavContainer';
import Logo from './Logo';
import theme from '../../../styles/global/theme';
import mediaQueries from '../../../styles/global/mediaQueries';

const HeaderStyle = styled('header')`
  width: ${theme.maxWidth};
  max-width: 100%;
  margin: 0 auto;
  height: 72px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  ${mediaQueries.tabletLandscape} {
    width: 100%;
    nav {
      display: none;
    }
  }
`;

const Header = args => (
  <HeaderStyle>
    <Logo />
    <NavContainer />
  </HeaderStyle>
);

export default Header;
