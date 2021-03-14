import PropTypes from 'prop-types';
import React from 'react';
import { motion } from 'framer-motion';
import styled from '@emotion/styled';
import { Link } from 'gatsby';
import CloakLinkFooter from './CloakLinkFooter';
import mediaQueries from '../../../styles/global/mediaQueries';

const FooterWrapper = styled(motion.footer)`
  margin: 114px 0 0 0;
  padding: 80px;
  color: ${(props) => props.theme.colors.revert};
  background: ${(props) => props.theme.bg.revert};

  ${mediaQueries.mobile} {
    margin: 64px 0 0 0;
    padding: 24px;
  }

  .footer-top {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: baseline;

    ${mediaQueries.tabletLandscape} {
      flex-direction: column;
    }
  }

  .disclaimer {
    max-width: ${(props) => props.theme.contentWidth};
  }

  .separator {
    display: inline-block;
    margin: 0 8px;
  }

  a {
    color: ${(props) => props.theme.colors.revert};
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;

const LinkFooter = styled(Link)`
  font-size: 18px;
  color: ${(props) => props.theme.colors.revert};
  text-decoration: none;
  letter-spacing: -1px;
  ${mediaQueries.mobile} {
    font-size: 22px;
    line-height: 1.5;
  }
  &:hover {
    text-decoration: underline;
  }
`;

const Footer = ({ data, pathName }) => {
  const date = new Date();
  const post = data.sanityPost;

  return (
    <FooterWrapper
      initial={{ y: 72, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: [0.6, 0.05, -0.01, 0.9] }}
    >
      <div className="footer-top">
        <p className="logo">
          CLAVIER MECA /
          {' '}
          {date.getFullYear()}
        </p>
        <div className="disclaimer">
          <h2>
            Information et protection du consommateur
          </h2>
          <p>
            Notre site est rédigé par des passionnés et des professionnels du
            matériel informatique. Certains liens sont liés à des programmes
            d’affiliation (Amazon, Materiel.net). Chaque clic sur un produit est
            susceptible de vous renvoyer vers l’un de ces commerçants. Si vous
            décidez de commander un produit, nous recevons une commission via
            nos liens. Cela nous fera plaisir et nous aidera à poursuivre nos
            efforts pour vous donner une information toujours plus riche sur les
            meilleurs produits. Cela ne vous coûte rien de plus que votre achat
            comme vous le faites habituellement.
          </p>
        </div>
        <div className="menu">
          {pathName === '/' ? (
            <LinkFooter to="/plan-site">Plan du site</LinkFooter>
          ) : (
            <CloakLinkFooter
              url={`/${post.slug.current}`}
              content="Plan du site"
            />
          )}
          <br />
          <CloakLinkFooter
            url={`/${post.slug.current}`}
            content="Mentions légales"
          />
          <br />
          <CloakLinkFooter url="/contact" content="Contact" />
        </div>
      </div>
    </FooterWrapper>
  );
};

Footer.propTypes = {
  data: PropTypes.shape({
    sanityPost: PropTypes.shape({
      slug: PropTypes.shape({
        current: PropTypes.string.isRequired,
      }),
    }),
  }).isRequired,
};

export default Footer;
