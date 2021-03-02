// Create an object with sanity + amazon information
import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';

// Merge inforrmations keyboard from Sanity to informations from an Array with every keyboard products
const KeyboardContainer = ({
  keyboard,
  keyboardsAmazon,
  renderComponent,
  ...rest
}) => {
  const RenderComponent = renderComponent;
  let keyboardMerged = keyboard;
  console.info(keyboard, keyboardsAmazon);
  if (keyboardsAmazon) {
    const keyboardAmazonFiltered = keyboardsAmazon.filter(keyboardAmazon => {
      if (keyboardAmazon.ASIN === keyboard?.asin) {
        return keyboardAmazon;
      }
    });
    if (keyboardAmazonFiltered.length > 0) {
      const keyboardAmazon = keyboardAmazonFiltered[0];
      keyboardMerged = {
        ...keyboard,
        ...keyboardAmazon,
      };
    }
  }

  console.info(keyboardMerged);

  return <RenderComponent keyboard={keyboardMerged} {...rest} />;
};

KeyboardContainer.propTypes = {
  keyboard: PropTypes.object.isRequired,
  keyboardsAmazon: PropTypes.array.isRequired,
};

export default KeyboardContainer;
