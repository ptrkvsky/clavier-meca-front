import PropTypes from 'prop-types';
import React from 'react';
import styled from '@emotion/styled';
import KeyboardSectionItem from './KeyboardSectionItem';
import KeyboardContainer from './KeyboardContainer';
import KeyboardAside from './KeyboardAside';
import { TitleH2 } from '../../styles/components/Titles';
import PortableText from '../portableText';
import mediaQueries from '../../styles/global/mediaQueries';

const Grid = styled('section')`
  display: grid;
  grid-template-columns: 1fr 269px;
  grid-gap: 98px;
  ${mediaQueries.tabletLandscape} {
    grid-template-columns: 1fr;
  }
  .intro{
    ${mediaQueries.mobile} {
      padding-left: 8px;
    }
  }
`;

const KeyboardsSection = ({
  _rawDescription,
  hn,
  keyboardCol,
  keyboards,
  keyboardsAmazon,
  subTitleCol,
  title,
  titleCol,
}) => (
  <div>
    <div className="numberh2">
      <TitleH2 as={hn}>{title}</TitleH2>
    </div>

    <Grid>
      <div className="col-left numberh2">
        <div className="intro">
          <PortableText blocks={_rawDescription} />
        </div>
        {keyboards.map((keyboard) => (
          <KeyboardContainer
            keyboardsAmazon={keyboardsAmazon}
            key={keyboard._key}
            keyboard={keyboard.keyboard}
            hn={keyboard.Hn}
            renderComponent={KeyboardSectionItem}
          />
        ))}
      </div>
      <div className="col-right">
        <KeyboardAside
          keyboard={keyboardCol}
          subTitleCol={subTitleCol}
          titleCol={titleCol}
        />
      </div>
    </Grid>
  </div>
);

KeyboardsSection.propTypes = {
  _rawDescription: PropTypes.array.isRequired,
  hn: PropTypes.string.isRequired,
  keyboardCol: PropTypes.bool.isRequired,
  keyboards: PropTypes.shape({
    map: PropTypes.func,
  }).isRequired,
  keyboardsAmazon: PropTypes.array.isRequired,
  subTitleCol: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  titleCol: PropTypes.string.isRequired,
};

export default KeyboardsSection;
