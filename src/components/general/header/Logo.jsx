import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled';
import theme from '../../../styles/global/theme';

const LogoStyle = styled(Link)`
  font-family: ${theme.fonts.title};
  font-size: 20px;
  letter-spacing: 2px;
  line-height: 1;
  text-transform: uppercase;
  color: ${theme.colors.main};
  text-decoration: none;
`;

const Logo = ({ handleOnCursor }) => <LogoStyle to="/" onMouseEnter={() => handleOnCursor('hovered')} onMouseLeave={() => handleOnCursor()}>Clavier Meca</LogoStyle>;

Logo.propTypes = {
  handleOnCursor: PropTypes.func.isRequired,
};

export default Logo;
