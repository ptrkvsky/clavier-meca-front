import React from 'react';
import styled from '@emotion/styled';
import theme from '../../styles/global/theme';

const FooterWrapper = styled('footer')`
  margin: 114px 0;
  padding: 80px;
  color: ${theme.colors.revert};
  background: ${theme.bg.revert};
`;

const Footer = () => {
  const date = new Date();
  return <FooterWrapper>CLAVIER MECA {date.getFullYear}</FooterWrapper>;
};

export default Footer;
