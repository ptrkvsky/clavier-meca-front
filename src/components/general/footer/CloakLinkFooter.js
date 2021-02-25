import React, { useState } from 'react';
import styled from '@emotion/styled';
import theme from '../../../styles/global/theme';
import { Link } from 'gatsby';

const LinkFooter = styled(Link)`
  font-size: 18px;
  color: ${theme.colors.revert};
  text-decoration: none;
  letter-spacing: -1px;
  &:hover {
    text-decoration: underline;
  }
`;

const SpanFooter = styled('span')`
  font-size: 18px;
  color: ${theme.colors.revert};
  text-decoration: none;
  letter-spacing: -1px;
  &:hover {
    text-decoration: underline;
  }
`;

const CloakLinkFooter = ({ url, content }) => {
  const [isCloaked, setIsCloaked] = useState(true);
  return (
    <div
      style={{ display: 'inline-block' }}
      onMouseEnter={() => setIsCloaked(false)}
      onMouseLeave={() => setIsCloaked(true)}
    >
      {isCloaked ? (
        <SpanFooter>{content}</SpanFooter>
      ) : (
        <LinkFooter to={url}>{content}</LinkFooter>
      )}
    </div>
  );
};

export default CloakLinkFooter;
