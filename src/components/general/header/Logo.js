import React from 'react';
import { Link } from 'gatsby';
import theme from '../../../styles/global/theme';
import styled from '@emotion/styled';

const LogoStyle = styled(Link)`
  font-family: ${theme.fonts.title};
  font-size: 20px;
  letter-spacing: 2px;
  line-height: 1;
  text-transform: uppercase;
  color: ${theme.colors.main};
  text-decoration: none;
`;

const Logo = ({handleOnCursor}) => <LogoStyle to="/" onMouseEnter={() => handleOnCursor("hovered")} onMouseLeave={() => handleOnCursor()}>Clavier Meca</LogoStyle>;

export default Logo;
