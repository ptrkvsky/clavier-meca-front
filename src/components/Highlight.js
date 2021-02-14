import PropTypes from 'prop-types';
import React from 'react';
import PortableText from '../components/portableText';
import Img from 'gatsby-image';
import styled from '@emotion/styled';
import theme from '../styles/global/theme';

const HighlightStyled = styled('section')`
  margin: 114px 0;
  .highlight-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .highlight {
    padding: 0 35px;
    width: 757px;
    max-width: 100%;
    font-size: 32px;
    line-height: 44px;
    letter-spacing: -1px;
    font-family: ${theme.fonts.light};
    p:first-of-type {
      margin: 0;
      padding-top: 0;
    }
  }
`;

const Highlight = ({ _rawContent, illustration }) => {
  return (
    <HighlightStyled>
      <div className="highlight-wrapper">
        <div className="highlight">
          <PortableText blocks={_rawContent} />
        </div>
      </div>
    </HighlightStyled>
  );
};

Highlight.propTypes = {
  _rawContent: PropTypes.array.isRequired,
};

export default Highlight;
