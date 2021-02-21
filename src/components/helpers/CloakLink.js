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
        <span className="daclok">{content}</span>
      ) : (
        <a href={url} className="daclok" rel="noopener" target="_blank">
          {content}
        </a>
      )}
    </div>
  );
};

export default CloakLink;
