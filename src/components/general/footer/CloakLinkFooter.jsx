import PropTypes from 'prop-types';
import React, { useState } from 'react';
import styled from '@emotion/styled';
import { Link } from 'gatsby';
import mediaQueries from '../../../styles/global/mediaQueries';

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

const SpanFooter = styled('span')`
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

CloakLinkFooter.propTypes = {
  content: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default CloakLinkFooter;
