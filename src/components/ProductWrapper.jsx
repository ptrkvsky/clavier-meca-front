import PropTypes from 'prop-types';
import React from 'react';

import styled from '@emotion/styled';
import mediaQueries from '../styles/global/mediaQueries';
import Product from './Product';

const Article12 = styled('article')`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 122px;
  margin: 61px 0;

  ${mediaQueries.mobile}{
    padding: 0 8px;
    margin: 24px 0;
    grid-template-columns: 1fr ;
    grid-template-rows: auto auto;
    grid-gap: 12px;
  }

  &:nth-child(even) {
    .desc {
      grid-column: 1;
      grid-row: 1;
      ${mediaQueries.mobile}{
        grid-column: 1;
        grid-row: 2;
      }
    }
    .illu {
      grid-column: 2;
      grid-row: 1;
      ${mediaQueries.mobile}{
        grid-column: 1;
        grid-row: 2;
      }
    }
  }
`;

const Article6 = styled('article')`
  padding: 0 0 30px 0;
  margin: 61px 0;
  width: 343px;
  background: #fefefe;
  box-shadow: 0px 4px 35px rgba(0, 0, 0, 0.1);
  border-radius: 15px;
  box-sizing: border-box;
  border: 4px solid ${(props) => props.theme.colors.main};
  display: grid;
  grid-template-rows: 340px auto;

  ${mediaQueries.mobile} {
    width: 100%;
    margin: 24px 8px;
  }

  .gatsby-image-wrapper {
    min-height: 340px;
    img {
      border-radius: 15px;
    }
  }
`;

const ProductWrapper = ({ product, productsAmazon }) => {
  return product.size === 'full' ? (
    <Article12 className="full">
      <Product product={product} productsAmazon={productsAmazon} />
    </Article12>
  ) : (
    <Article6 className="small">
      <Product product={product} productsAmazon={productsAmazon} />
    </Article6>
  );
};

ProductWrapper.propTypes = {
  product: PropTypes.shape({
    size: PropTypes.string,
  }),
  productsAmazon: PropTypes.array.isRequired,
};

export default ProductWrapper;
