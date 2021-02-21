import PropTypes from 'prop-types';
import React, { useState } from 'react';

import { GatsbyImage } from "gatsby-plugin-image";
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
    margin-top: 20px;
    padding: 0 20px;
  }
`;

const ProductDesc = styled('div')`
  margin: 22px 0;
  .small & {
    margin: 20px 0;
    padding: 0 20px;
  }
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
  align-items: flex-end;
  .small & {
    justify-content: space-between;
    .button-primary {
      border-top-right-radius: 0px;
      border-bottom-right-radius: 0px;
    }
  }
`;

const renderLink = (isVisible, url) => {
  if (isVisible) {
    return (
      <PrimaryButton
        className="button-primary"
        as="a"
        href={url}
        target="_blank"
      >
        Voir l'offre
      </PrimaryButton>
    );
  }
  return (
    <PrimaryButton className="button-primary" as="span">
      Voir l'offre
    </PrimaryButton>
  );
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
              className="button-wrapper"
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
