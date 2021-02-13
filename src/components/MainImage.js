import React from 'react';
import { buildImageObj } from '../lib/helpers';
import { imageUrlFor } from '../lib/image-url';
import styled from '@emotion/styled';

const ImageContainer = styled('div')`
  margin: 44px -146px;
  text-align: center;
  img {
    max-width: 100%;
  }
`;

const MainImage = ({ mainImage, width = 1200 }) => {
  const imgUrl =
    mainImage &&
    imageUrlFor(buildImageObj(mainImage))
      // .width(width)
      // .height(Math.floor((9 / 16) * width))
      .fit('crop')
      .auto('format')
      .url();

  return imgUrl ? (
    <ImageContainer>
      <img loading="lazy" src={imgUrl} alt={mainImage.alt || ''} />
    </ImageContainer>
  ) : (
    <></>
  );
};

export default MainImage;
