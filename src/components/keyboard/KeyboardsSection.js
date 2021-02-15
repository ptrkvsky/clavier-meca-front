import React from 'react';
import styled from '@emotion/styled';
import KeyboardSectionItem from './KeyboardSectionItem';
import KeyboardAside from './KeyboardAside';

const Grid = styled('section')`
  display: grid;
  grid-template-columns: 1fr 269px;
  grid-gap: 98px;
`;

const KeyboardsSection = ({
  keyboards,
  keyboardCol,
  subTitleCol,
  titleCol,
}) => {
  return (
    <Grid>
      <div class="col-left">
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
  );
};

export default KeyboardsSection;
