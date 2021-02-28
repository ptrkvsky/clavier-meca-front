import PropTypes from 'prop-types';
import React, { useState } from 'react';

import styled from '@emotion/styled';
import theme from '../styles/global/theme';
import ProductWrapper from './ProductWrapper';

const Section = styled('section')`
  display: flex;
  flex-wrap: wrap;
  column-gap: 60px;
  justify-content: center;
`;

const ProductsSection = ({ products, productsAmazon }) => {
  return (
    <Section>
      {products.map(product => {
        return (
          <ProductWrapper
            product={product}
            key={product._key}
            productsAmazon={productsAmazon}
          />
        );
      })}
    </Section>
  );
};

ProductsSection.propTypes = {
  products: PropTypes.array.isRequired,
  productsAmazon: PropTypes.array.isRequired,
};

export default ProductsSection;
