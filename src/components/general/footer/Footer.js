import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'gatsby';
import CloakLinkFooter from './CloakLinkFooter';
import theme from '../../../styles/global/theme';
import mediaQueries from '../../../styles/global/mediaQueries';

const FooterWrapper = styled('footer')`
  margin: 114px 0 0 0;
  padding: 80px;
  color: ${theme.colors.revert};
  background: ${theme.bg.revert};

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
    max-width: ${theme.contentWidth};
  }

  .separator {
    display: inline-block;
    margin: 0 8px;
  }

  a {
    color: ${theme.colors.revert};
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;

const LinkFooter = styled(Link)`
  font-size: 18px;
  color: ${theme.colors.revert};
  text-decoration: none;
  letter-spacing: -1px;
  &:hover {
    text-decoration: underline;
  }
`;

const Footer = ({ data }) => {
  const date = new Date();
  const post = data.sanityPost;

  return (
    <FooterWrapper>
      <div className="footer-top">
        <p className="logo">CLAVIER MECA / {date.getFullYear()}</p>
        <div className="disclaimer">
          <h2>Informations consommatteurs</h2>
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
          <LinkFooter to="/plan-site">Plan du site</LinkFooter>
          <br />
          <CloakLinkFooter
            url={`/${post.slug.current}`}
            content="Mentions légales"
          />
          <br />
          <CloakLinkFooter url={`/contact`} content="Contact" />
        </div>
      </div>
    </FooterWrapper>
  );
};

export default Footer;
