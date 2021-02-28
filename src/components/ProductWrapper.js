import PropTypes from 'prop-types';
import React from 'react';

import styled from '@emotion/styled';
import theme from '../styles/global/theme';
import Product from './Product';

const Article12 = styled('article')`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 122px;
  margin: 61px 0;
  &:nth-child(even) {
    .desc {
      grid-column: 1;
      grid-row: 1;
    }
    .illu {
      grid-column: 2;
      grid-row: 1;
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
  border: 4px solid ${theme.colors.main};
  display: grid;
  grid-template-rows: 340px auto;

  .gatsby-image-wrapper {
    min-height: 340px;
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
