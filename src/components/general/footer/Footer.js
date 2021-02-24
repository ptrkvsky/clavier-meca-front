import React from 'react';
import styled from '@emotion/styled';
import CloakLinkFooter from './CloakLinkFooter';
import theme from '../../../styles/global/theme';

const FooterWrapper = styled('footer')`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: baseline;

  margin: 114px 0;
  padding: 80px;
  color: ${theme.colors.revert};
  background: ${theme.bg.revert};

  .separator {
    display: inline-block;
    margin: 0 8px;
  }
`;

const Footer = ({ data }) => {
  const date = new Date();
  const post = data.sanityPost;

  return (
    <FooterWrapper>
      <p>CLAVIER MECA / {date.getFullYear()}</p>
      <div>
        <CloakLinkFooter
          url={`/${post.slug.current}`}
          content="Mentions légales"
        />
        <span class="separator">/</span>
        <CloakLinkFooter url={`/contact`} content="Contact" />
      </div>
    </FooterWrapper>
  );
};

export default Footer;
