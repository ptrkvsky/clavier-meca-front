import PropTypes from 'prop-types';
import React from 'react';
import styled from '@emotion/styled';
import { buildImageObj } from '../lib/helpers';
import { imageUrlFor } from '../lib/image-url';
import mediaQueries from '../styles/global/mediaQueries';

const ImageContainer = styled('div')`
  margin: 44px -146px;
  text-align: center;
  img {
    max-width: 100%;
  }
  ${mediaQueries.tabletLandscape} {
    margin: 44px 0;
  }
  ${mediaQueries.mobile} {
    margin: 12px 0;
  }
`;

const MainImage = ({ mainImage }) => {
  const imgUrl = mainImage && imageUrlFor(buildImageObj(mainImage)).url();
  return imgUrl ? (
    <ImageContainer>
      <img loading="lazy" src={imgUrl} alt={mainImage.alt || ''} />
    </ImageContainer>
  ) : (
    <></>
  );
};

MainImage.propTypes = {
  mainImage: PropTypes.shape({
    alt: PropTypes.string.isRequired,
  }).isRequired,
};

export default MainImage;
