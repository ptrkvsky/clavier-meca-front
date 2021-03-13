/* eslint-disable array-callback-return */
/* eslint-disable react/no-unescaped-entities */
import PropTypes from 'prop-types';
import React, { useState } from 'react';
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

const Product = ({ product, productsAmazon }) => {
  const [linkVisible, setLinkVisible] = useState(false);
  let availability = null;
  // Filter amazon products tab
  if (productsAmazon) {
    const productAmazonFiltered = productsAmazon.filter((productAmazon) => {
      if (productAmazon.ASIN === product.product.asin) {
        return productAmazon;
      }
    });

    if (productAmazonFiltered.length > 0) {
      availability = productAmazonFiltered[0].Offers.Listings[0].Availability.Message;
    }
  }
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
                {availability ? (
                  <p>
                    <b>Disponibilité :</b>
                    {' '}
                    {availability}
                  </p>
                ) : (
                  ''
                )}
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
  Hn: PropTypes.string.isRequired,
  product: PropTypes.shape({
    Hn: PropTypes.any,
    product: PropTypes.shape({
      _rawLongDesc: PropTypes.any,
      asin: PropTypes.any,
      mainImage: PropTypes.shape({
        asset: PropTypes.any,
      }),
      title: PropTypes.any,
      url: PropTypes.any,
    }).isRequired,
    title: PropTypes.string,
  }).isRequired,
  productsAmazon: PropTypes.shape({
    filter: PropTypes.func,
  }).isRequired,
};

export default Product;
