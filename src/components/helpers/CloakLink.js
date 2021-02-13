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
          {content}
        </a>
      ) : (
        <span className="daclok">{content}</span>
      )}
    </div>
  );
};

export default CloakLink;
