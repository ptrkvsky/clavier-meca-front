import PropTypes from 'prop-types';
import React from 'react';

import PortableText from '../components/portableText';
import Img from 'gatsby-image';
import styled from '@emotion/styled';
import theme from '../styles/global/theme';
import quote from '../assets/images/chevron.svg';

const BodySectionStyled = styled('section')`
  max-width: ${theme.contentWidth};
  margin: 0 auto;
  font-size: 18px;
  line-height: 24px;

  blockquote {
    position: relative;
    padding: 54px 0 54px 98px;
    font-size: 32px;
    line-height: 44px;
    font-family: ${theme.fonts.light};
    &:before {
      content: url('${quote}');
      position: absolute;
      top: 54px;
      left: 34px;
    }
  }
  h2 {
    position: relative;
    font-size: 48px;
    line-height: 64px;
    font-family: ${theme.fonts.title};
    margin: 120px 0 85px 0;
    span {
      z-index: -1;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      left: -160px;
      font-size: 250px;
      color: white;
      text-shadow: -1px -1px 0 ${theme.colors.primary},
        1px -1px 0 ${theme.colors.primary}, -1px 1px 0 ${theme.colors.primary},
        1px 1px 0 ${theme.colors.primary};
      font-family: ${theme.fonts.light};
      opacity: 0.2;
    }
  }
  h3 {
    position: relative;
    margin: 64px 0 67px;
    font-size: 48px;
    font-family: ${theme.fonts.title};
    line-height: 64px;

    &:after {
      content: '';
      display: block;
      position: absolute;
      bottom: -20px;
      width: 74px;
      height: 11px;
      background-color: ${theme.colors.primary};
    }
  }

  h4 {
    font-family: ${theme.fonts.title};
    font-size: 32px;
  }
`;

const BodySection = ({ _rawBodyTextt, tableOfContent, setTableOfContent }) => {
  return (
    <BodySectionStyled>
      <PortableText
        blocks={_rawBodyTextt}
        tableOfContent={tableOfContent}
        setTableOfContent={setTableOfContent}
      />
    </BodySectionStyled>
  );
};

BodySection.propTypes = {
  _rawBodyTextt: PropTypes.array.isRequired,
};

export default BodySection;
