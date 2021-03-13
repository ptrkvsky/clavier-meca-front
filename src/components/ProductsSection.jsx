import PropTypes from 'prop-types';
import React from 'react';
import styled from '@emotion/styled';
import ProductWrapper from './ProductWrapper';

const Section = styled('section')`
  display: flex;
  flex-wrap: wrap;
  column-gap: 60px;
  justify-content: center;
`;

const ProductsSection = ({ products, productsAmazon }) => (
  <Section>
    {products.map((product) => (
      <ProductWrapper
        product={product}
        key={product._key}
        productsAmazon={productsAmazon}
      />
    ))}
  </Section>
);

ProductsSection.propTypes = {
  products: PropTypes.array.isRequired,
  productsAmazon: PropTypes.array.isRequired,
};

export default ProductsSection;
