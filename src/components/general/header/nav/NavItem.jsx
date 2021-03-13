import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import mediaQueries from '../../../../styles/global/mediaQueries';

const NavItemStyle = styled(motion.li)`
  position: relative;
  font-size: 16px;
  line-height: 20px;

  a {
    color: ${(props) => props.theme.colors.main};
    ${mediaQueries.tabletLandscape}{
      color: ${(props) => props.theme.colors.revert};
      font-size: 34px;
      line-height: 1.5;
    }
    
    text-decoration: none;
    
  }

  .active {
    &::after {
      content: '';
      position: absolute;
      top: 24px;
      left: 1px;
      display: block;
      width: 29px;
      height: 4px;
      background-color: #000;
    }
  }
`;

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

const NavItem = ({
  slug, name, tablet, toggle, handleOnCursor,
}) => (

  <NavItemStyle variants={tablet ? variants : ''}>
    <Link
      to={`/${slug}`}
      activeClassName="active"
      onClick={toggle}
      onMouseEnter={() => handleOnCursor('hovered')}
      onMouseLeave={() => handleOnCursor()}
    >
      {name}
    </Link>
  </NavItemStyle>
);

NavItem.defaultProps = {
  handleOnCursor: () => {},
  tablet: false,
  toggle: () => {},
};

NavItem.propTypes = {
  handleOnCursor: PropTypes.func,
  name: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  tablet: PropTypes.bool,
  toggle: PropTypes.func,
};

export default NavItem;
