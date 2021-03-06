import PropTypes from "prop-types";
import React from 'react';
import styled from '@emotion/styled';
import {motion} from 'framer-motion';
import NavContainer from './nav/NavContainer';
import Logo from './Logo';
import theme from '../../../styles/global/theme';
import mediaQueries from '../../../styles/global/mediaQueries';

const HeaderStyle = styled(motion.header)`
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

const Header = ({ handleOnCursor }) => {
  return (
  <HeaderStyle initial={{y:-72, opacity: 0}} animate={{y:0, opacity: 1}} transition={{duration: 1, ease: [0.6, 0.05, -0.01, 0.9]}}>
    <Logo handleOnCursor={handleOnCursor} />
    <NavContainer />
  </HeaderStyle>
)};

Header.propTypes = {
  handleOnCursor: PropTypes.func.isRequired
}

export default Header;
