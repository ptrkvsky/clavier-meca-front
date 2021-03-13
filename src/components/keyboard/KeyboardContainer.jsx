/* eslint-disable react/jsx-props-no-spreading */
// Create an object with sanity + amazon information
import PropTypes from 'prop-types';
import React from 'react';

// Merge inforrmations keyboard from Sanity to informations
// from an Array with every keyboard products

const KeyboardContainer = ({
  keyboard,
  keyboardsAmazon,
  renderComponent,
  ...rest
}) => {
  const RenderComponent = renderComponent;
  let keyboardMerged = keyboard;
  if (keyboardsAmazon) {
    const keyboardAmazonFiltered = keyboardsAmazon.filter((keyboardAmazon) => {
      if (keyboardAmazon.ASIN === keyboard?.asin) {
        return keyboardAmazon;
      }
      return false;
    });
    if (keyboardAmazonFiltered.length > 0) {
      const keyboardAmazon = keyboardAmazonFiltered[0];
      if (keyboardAmazon) {
        keyboardMerged = {
          ...keyboard,
          ...keyboardAmazon,
        };
      }
    }
  }
  return <RenderComponent keyboard={keyboardMerged} {...rest} />;
};

KeyboardContainer.propTypes = {
  keyboard: PropTypes.object.isRequired,
  keyboardsAmazon: PropTypes.array.isRequired,
  renderComponent: PropTypes.func.isRequired,
};

export default KeyboardContainer;
