import React from 'react';
import KeyboardSectionItem from './KeyboardSectionItem';

const KeyboardsSection = ({ keyboards }) => {
  return keyboards.map(keyboard => (
    <KeyboardSectionItem key={keyboard._key} keyboard={keyboard} />
  ));
};

export default KeyboardsSection;
