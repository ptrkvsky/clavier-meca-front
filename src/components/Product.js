import PropTypes from 'prop-types';
import React, { useState } from 'react';

import Img from 'gatsby-image';
import styled from '@emotion/styled';
import theme from '../styles/global/theme';
import { PrimaryButton } from '../styles/components/Buttons';
import PortableText from './portableText';
import CloakImage from './CloakImage';

const ProductTitle = styled('h2')`
  margin-top: 0;
  margin-bottom: 20px;
  line-height: 1;
  letter-spacing: -1px;
  font-size: 24px;
  font-family: ${theme.fonts.title};
  text-transform: uppercase;
  .small & {
    margin-top: 40px;
  }
`;

const ProductDesc = styled('div')`
  margin: 40px 0;
`;

const BlockIllu = styled('div')`
  display: flex;
  align-items: center;
  a {
    display: block;
    width: 100%;
  }
`;

const BlockDesc = styled('div')`
  display: flex;
  flex-direction: column;
  .small & {
    justify-content: space-between;
  }
`;

const renderLink = (isVisible, url) => {
  if (isVisible) {
    return (
      <PrimaryButton as="a" href={url} target="_blank">
        Amazon
      </PrimaryButton>
    );
  }
  return <PrimaryButton as="span">Amazon</PrimaryButton>;
};

const Product = ({ product }) => {
  const [linkVisible, setLinkVisible] = useState(false);
  return (
    <>
      {product ? (
        <>
          <BlockIllu className="illu">
            <CloakImage
              asset={product.product.mainImage.asset}
              url={product.product.url}
            />
          </BlockIllu>
          <BlockDesc className="desc">
            <div className="text">
              <ProductTitle as={product.Hn}>
                {product.product.title}
              </ProductTitle>
              <ProductDesc>
                <PortableText blocks={product.product._rawLongDesc} />
              </ProductDesc>
            </div>
            <div
              onMouseEnter={() => setLinkVisible(true)}
              onMouseLeave={() => setLinkVisible(false)}
            >
              {renderLink(linkVisible, product.product.url)}
            </div>
          </BlockDesc>
        </>
      ) : (
        ''
      )}
    </>
  );
};

Product.propTypes = {
  Hn: PropTypes.any,
  product: PropTypes.shape({
    title: PropTypes.string,
  }),
};

export default Product;
