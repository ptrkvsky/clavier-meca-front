import PropTypes from 'prop-types';
import React from 'react';
import styled from '@emotion/styled';
import PortableText from './portableText';
import fonts from '../styles/global/fonts';
import mediaQueries from '../styles/global/mediaQueries';

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
    font-family: ${fonts.light};
    ${mediaQueries.tabletLandscape} {
      width: auto;
    }
    ${mediaQueries.mobile} {
      font-size: 26px;
      line-height: 32px;
    }
    p:first-of-type {
      margin: 0;
      padding-top: 0;
    }
  }
`;

const Highlight = ({ _rawContent }) => (
  <HighlightStyled>
    <div className="highlight-wrapper">
      <div className="highlight">
        <PortableText blocks={_rawContent} />
      </div>
    </div>
  </HighlightStyled>
);

Highlight.propTypes = {
  _rawContent: PropTypes.array.isRequired,
};

export default Highlight;
