import PropTypes from 'prop-types';
import React from 'react';

import styled from '@emotion/styled';
import PortableText from './portableText';
import quote from '../assets/images/chevron.svg';

const BodySectionStyled = styled('section')`
  max-width: ${(props) => props.theme.contentWidth};
  margin: 0 auto;
  font-size: 18px;
  line-height: 24px;

  blockquote {
    position: relative;
    padding: 54px 0 54px 98px;
    font-size: 32px;
    line-height: 44px;
    font-family: ${(props) => props.theme.fonts.light};
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
    font-family: ${(props) => props.theme.fonts.title};
    margin: 120px 0 85px 0;
    span {
      z-index: 0;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      left: -160px;
      font-size: 250px;
      color: white;
      text-shadow: -1px -1px 0 ${(props) => props.theme.colors.primary},
        1px -1px 0 ${(props) => props.theme.colors.primary}, -1px 1px 0 ${(props) => props.theme.colors.primary},
        1px 1px 0 ${(props) => props.theme.colors.primary};
      font-family: ${(props) => props.theme.fonts.light};
      opacity: 0.2;
    }
  }

  h3 {
    position: relative;
    margin: 64px 0 67px;
    font-size: 48px;
    font-family: ${(props) => props.theme.fonts.title};
    line-height: 64px;

    &:after {
      content: '';
      display: block;
      position: absolute;
      bottom: -20px;
      width: 74px;
      height: 11px;
      background-color: ${(props) => props.theme.colors.primary};
    }
  }

  h4 {
    font-family: ${(props) => props.theme.fonts.title};
    font-size: 32px;
  }
`;

const BodySection = ({ _rawBodyTextt, tableOfContent, setTableOfContent }) => (
  <BodySectionStyled className="numberh2">
    <PortableText
      blocks={_rawBodyTextt}
      tableOfContent={tableOfContent}
      setTableOfContent={setTableOfContent}
    />
  </BodySectionStyled>
);

BodySection.propTypes = {
  _rawBodyTextt: PropTypes.array.isRequired,
  setTableOfContent: PropTypes.func.isRequired,
  tableOfContent: PropTypes.object.isRequired,
};

export default BodySection;
