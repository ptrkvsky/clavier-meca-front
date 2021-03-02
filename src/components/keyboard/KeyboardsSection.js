import PropTypes from 'prop-types';
import React from 'react';
import styled from '@emotion/styled';
import KeyboardSectionItem from './KeyboardSectionItem';
import KeyboardContainer from './KeyboardContainer';
import KeyboardAside from './KeyboardAside';
import { TitleH2 } from '../../styles/components/Titles';
import PortableText from '../portableText';

const Grid = styled('section')`
  display: grid;
  grid-template-columns: 1fr 269px;
  grid-gap: 98px;
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
}) => {
  return (
    <div>
      <TitleH2 as={hn}>{title}</TitleH2>

      <Grid>
        <div class="col-left">
          <PortableText blocks={_rawDescription} />
          {keyboards.map(keyboard => (
            <KeyboardContainer
              keyboardsAmazon={keyboardsAmazon}
              key={keyboard._key}
              keyboard={keyboard.keyboard}
              hn={keyboard.Hn}
              renderComponent={KeyboardSectionItem}
            />
          ))}
        </div>
        <div class="col-right">
          <KeyboardAside
            keyboard={keyboardCol}
            subTitleCol={subTitleCol}
            titleCol={titleCol}
          />
        </div>
      </Grid>
    </div>
  );
};

KeyboardsSection.propTypes = {
  _rawDescription: PropTypes.object.isRequired,
  hn: PropTypes.string.isRequired,
  keyboardCol: PropTypes.bool.isRequired,
  keyboards: PropTypes.shape({
    map: PropTypes.func,
  }),
  keyboardsAmazon: PropTypes.array.isRequired,
  subTitleCol: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  titleCol: PropTypes.string.isRequired,
};

export default KeyboardsSection;
