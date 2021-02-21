import React from 'react';
import { buildImageObj } from '../lib/helpers';
import { imageUrlFor } from '../lib/image-url';
import styled from '@emotion/styled';
import { StaticImage } from 'gatsby-plugin-image';
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
`;

const MainImage = ({ mainImage, width = 1200 }) => {
  const imgUrl = mainImage && imageUrlFor(buildImageObj(mainImage)).url();
  console.info(imgUrl);
  return imgUrl ? (
    <ImageContainer>
      <img loading="lazy" src={imgUrl} alt={mainImage.alt || ''} />
      {/* {imgUrl && <StaticImage src={imgUrl} alt="A kitten" />} */}
    </ImageContainer>
  ) : (
    <></>
  );
};

export default MainImage;
