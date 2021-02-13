import React, { useState } from 'react';

const CloakLink = ({ url, content }) => {
  const [isCloaked, setIsCloaked] = useState(true);

  return (
    <div
      style={{ display: 'inline-block' }}
      onMouseEnter={() => setIsCloaked(true)}
      onMouseLeave={() => setIsCloaked(false)}
    >
      {isCloaked ? (
        <a href={url} className="daclok" rel="noopener" target="_blank">
          {content} toto
        </a>
      ) : (
        <span className="daclok">{content} tata</span>
      )}
    </div>
  );
};

export default CloakLink;
