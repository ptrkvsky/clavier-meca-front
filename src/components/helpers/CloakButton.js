import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { PrimaryButton } from '../../styles/components/Buttons';

const CloakButton = ({ url }) => {
  const [isCloaked, setIsCloaked] = useState(true);

  return (
    <div
      style={{ display: 'inline-block' }}
      onMouseEnter={() => setIsCloaked(false)}
      onMouseLeave={() => setIsCloaked(true)}
    >
      {isCloaked ? (
        <PrimaryButton as="span">Voir l'offre</PrimaryButton>
      ) : (
        <PrimaryButton as="a" href={url} target="_blank" rel="noopener">
          Voir l'offre
        </PrimaryButton>
      )}
    </div>
  );
};

CloakButton.propTypes = {
  url: PropTypes.string.isRequired,
};

export default CloakButton;
