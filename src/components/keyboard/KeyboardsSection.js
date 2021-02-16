import React from 'react';
import styled from '@emotion/styled';
import KeyboardSectionItem from './KeyboardSectionItem';
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
            <KeyboardSectionItem key={keyboard._key} keyboard={keyboard} />
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

export default KeyboardsSection;
