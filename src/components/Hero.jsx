import PropTypes from 'prop-types';
import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import styled from '@emotion/styled';
import PortableText from './portableText';
import fonts from '../styles/global/fonts';
import mediaQueries from '../styles/global/mediaQueries';

const HeroStyled = styled('section')`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 114px 0;

  ${mediaQueries.tabletLandscape} {
    grid-template-columns: 1fr;
    grid-template-rows: auto auto;
  }
  ${mediaQueries.mobile} {
    margin: 24px 0;
  }

  .illustration {
    display: flex;
    padding: ${props => (props.padding ? '45px' : '0')};
    background-color: ${props =>
      props.padding ? props.theme.colors.primary : 'transparent'};
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
    font-family: ${fonts.light};
    ${mediaQueries.mobile} {
      padding: 0 8px;
      letter-spacing: 0;
    }
  }
`;

const Hero = ({ _rawBref, illustration, padding }) => (
  <HeroStyled padding={padding}>
    <div className="illustration">
      <GatsbyImage
        alt={illustration.image.alt}
        image={
          illustration.image.asset.localFile.childImageSharp.gatsbyImageData
        }
        className="illustration"
      />
    </div>
    <div className="highlight-wrapper">
      <div className="highlight">
        <PortableText blocks={_rawBref} />
      </div>
    </div>
  </HeroStyled>
);

Hero.defaultProps = {
  padding: false,
};

Hero.propTypes = {
  _rawBref: PropTypes.array.isRequired,
  illustration: PropTypes.shape({
    image: PropTypes.shape({
      alt: PropTypes.isRequired,
      asset: PropTypes.shape({
        localFile: PropTypes.shape({
          childImageSharp: PropTypes.shape({
            gatsbyImageData: PropTypes.object.isRequired,
          }),
        }),
      }),
    }),
  }).isRequired,
  padding: PropTypes.bool,
};

export default Hero;
