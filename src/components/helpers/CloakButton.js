import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { PrimaryButton } from '../../styles/components/Buttons';

const CloakButton = ({ url, content }) => {
  const [isCloaked, setIsCloaked] = useState(true);

  return (
    <div
      style={{ display: 'inline-block' }}
      onMouseEnter={() => setIsCloaked(false)}
      onMouseLeave={() => setIsCloaked(true)}
    >
      {isCloaked ? (
        <PrimaryButton as="span"> {content}</PrimaryButton>
      ) : (
        <PrimaryButton as="a" href={url} target="_blank" rel="noopener">
          {content}
        </PrimaryButton>
      )}
    </div>
  );
};

CloakButton.propTypes = {
  url: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default CloakButton;
