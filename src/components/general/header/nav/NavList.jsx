import PropTypes from 'prop-types';
import React from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import NavItem from './NavItem';
import mediaQueries from '../../../../styles/global/mediaQueries';

const Ul = styled(motion.ul)` 
    position: relative;
    z-index: 920;
    display: flex;
    flex-direction: row;
    list-style-type: none;
    gap: 42px;
    ${mediaQueries.tabletLandscape} {
        position: fixed;
        top: 75px;
        display: block;
        font-size: 3rem;
        padding: 0;
        margin: 0;
        gap: 0;
        flex-direction: column;
    }
    ${mediaQueries.mobile} {
        left: initial;
        right: 48px;
    }
    pointer-events: ${(props) => (props.isOpen ? '' : 'none')};
`;

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

const NavList = ({
  menuItems, tablet, toggle, isOpen,
}) => (
  <Ul isOpen={isOpen} variants={tablet ? variants : ''}>
    {menuItems.map((menuItem) => (
      <NavItem
        key={menuItem.menuItemSlug.current}
        name={menuItem.menuItemName}
        slug={menuItem.menuItemSlug.current}
        tablet={tablet}
        toggle={toggle}
      />
    ))}
  </Ul>
);

NavList.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  menuItems: PropTypes.shape({
    map: PropTypes.func.isRequired,
  }).isRequired,
  tablet: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired,
};

export default NavList;
