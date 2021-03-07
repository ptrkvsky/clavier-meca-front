import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import { BiArrowToTop as Icon } from '@react-icons/all-files/bi/BiArrowToTop';
import styled from '@emotion/styled';

const ButtonTop = styled('button')`
  display: block;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 800;
  position: fixed;
  bottom: 24px;
  right: 24px;
  width: 50px;
  height: 40px;
  border-radius: 3px;
  background-color: #e6e6e6;
  color: ${(props) => props.theme.colors.main};
  border: none;
  cursor: pointer;
  transition: all 0.2s linear;
  &:hover {
    background-color: ${(props) => props.theme.colors.primary};
    svg {
      color: ${(props) => props.theme.colors.revert};
    }
  }
`;

const Scroll = ({ showBelow }) => {
  const [show, setShow] = useState(!showBelow);

  const handleScroll = () => {
    if (window.pageYOffset > showBelow) {
      if (!show) setShow(true);
    } else if (show) setShow(false);
  };

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    if (showBelow) {
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }
  });

  return (
    <>
      {show && (
        <ButtonTop
          onClick={handleClick}
          aria-label="retour en haut"
          component="span"
        >
          <Icon size={30} />
        </ButtonTop>
      )}
    </>
  );
};

Scroll.propTypes = {
  showBelow: PropTypes.bool.isRequired,
};
export default Scroll;
