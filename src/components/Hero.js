import PropTypes from 'prop-types';
import React from 'react';
import PortableText from '../components/portableText';
import Img from 'gatsby-image';
import styled from '@emotion/styled';
import theme from '../styles/global/theme';

const HeroStyled = styled('section')`
  display: grid;
  grid-template-columns: 1fr 1fr;

  .illustration {
    padding: 45px;
    background-color: ${theme.colors.primary};
  }

  .highlight-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .highlight {
    max-width: 367px;
    font-size: 24px;
    line-height: 40px;
    font-family: ${theme.fonts.light};
  }
`;

const Hero = ({ _rawBref, illustration }) => {
  return (
    <HeroStyled>
      <div className="illustration">
        <Img
          className="illustration"
          loading="eager"
          fluid={illustration.image.asset.fluid}
        />
      </div>
      <div className="highlight-wrapper">
        <div className="highlight">
          <PortableText blocks={_rawBref} />
        </div>
      </div>
    </HeroStyled>
  );
};

Hero.propTypes = {
  _rawBref: PropTypes.array.isRequired,
};

export default Hero;
