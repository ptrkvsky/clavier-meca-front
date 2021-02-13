import React from 'react';
import NavContainer from './nav/NavContainer';
import Logo from './Logo';
import theme from '../../../styles/global/theme';
import styled from '@emotion/styled';

const HeaderStyle = styled('header')`
  width: ${theme.maxWidth};
  max-width: 100%;
  margin: 0 auto;
  height: 72px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const Header = args => (
  <HeaderStyle>
    <Logo />
    <NavContainer />
  </HeaderStyle>
);

export default Header;
