import PropTypes from 'prop-types';
import * as React from 'react';
import { motion } from 'framer-motion';
import styled from '@emotion/styled';
import mediaQueries from '../../../../styles/global/mediaQueries';

const Path = (props) => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    stroke="hsl(0, 0%, 100%)"
    strokeLinecap="round"
    {...props}
  />
);

const Button = styled('button')` 
    display: none;
    position: fixed;
    top: 15px;
    right: 15px;
    z-index: 930;
    width: 50px;
    height: 50px;
    outline: none;
    border: none;
   
    align-items: center;
    justify-content: center;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    border-radius: 50%;
    background: transparent;
    ${mediaQueries.tabletLandscape}{
        display: flex;
    }
`;

const MenuToggle = ({ toggle }) => (
  <Button onClick={toggle} type="button" aria-label="ouvre le menu">
    <svg width="23" height="23" viewBox="0 0 23 23">
      <Path
        variants={{
          closed: { d: 'M 2 2.5 L 20 2.5' },
          open: { d: 'M 3 16.5 L 17 2.5' },
        }}
      />
      <Path
        d="M 2 9.423 L 20 9.423"
        variants={{
          closed: { opacity: 1 },
          open: { opacity: 0 },
        }}
        transition={{ duration: 0.1 }}
      />
      <Path
        variants={{
          closed: { d: 'M 2 16.346 L 20 16.346' },
          open: { d: 'M 3 2.5 L 17 16.346' },
        }}
      />
    </svg>
  </Button>
);

MenuToggle.propTypes = {
  toggle: PropTypes.func.isRequired,
};

export default MenuToggle;
