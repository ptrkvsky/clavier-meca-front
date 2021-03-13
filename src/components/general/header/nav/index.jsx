import PropTypes from 'prop-types';
import React, { useRef } from 'react';
import styled from '@emotion/styled';
import { motion, useCycle } from 'framer-motion';
import mediaQueries from '../../../../styles/global/mediaQueries';
import NavList from './NavList';
import MenuToggle from './MenuToggle';

const NavStyle = styled(motion.nav)`
  display: ${(props) => (props.tablet ? 'none' : 'initial')};
  ${mediaQueries.tabletLandscape} {
    display: ${(props) => (props.tablet ? 'initial' : 'none')};
  }

  .background {
    display: none;
    z-index: 900;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    width: 300px;
    background: ${(props) => props.theme.bg.revert};
    ${mediaQueries.tabletLandscape}{
        display: inherit;
    }
  }

  .wrapper {
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
  }
`;

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 260px 40px)`,
    transition: {
      type: 'spring',
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: 'circle(30px at 260px 40px)',
    transition: {
      delay: 0.5,
      type: 'spring',
      stiffness: 400,
      damping: 40,
    },
  },
};

const Nav = ({ data, handleOnCursor }) => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);

  const menuItems = data.sanityMenu.menuItem;
  return (
    <>
      <NavStyle tablet={false} className="desktop">
        <div className="wrapper">
          <NavList isOpen tablet={false} handleOnCursor={handleOnCursor} menuItems={menuItems} />
        </div>
      </NavStyle>
      <NavStyle
        initial={false}
        animate={isOpen ? 'open' : 'closed'}
        custom={100}
        ref={containerRef}
        tablet
      >
        <motion.div className="background" variants={sidebar} />

        <div className="wrapper">
          <NavList tablet isOpen={isOpen} menuItems={menuItems} toggle={() => toggleOpen()} />
        </div>
        <MenuToggle toggle={() => toggleOpen()} />
      </NavStyle>
    </>
  );
};

Nav.propTypes = {
  data: PropTypes.shape({
    sanityMenu: PropTypes.shape({
      menuItem: PropTypes.array,
    }),
  }).isRequired,
  handleOnCursor: PropTypes.func.isRequired,
};

export default Nav;
