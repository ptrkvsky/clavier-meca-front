import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';

const CloakImage = ({ asset, url }) => {
  const [link, setLink] = useState('#');

  useEffect(() => {
    setLink(url);
  }, [link]);

  return (
    <a href={link} target="_blank">
      {asset.fluid && (
        <GatsbyImage
          image={asset.localFile.childImageSharp.gatsbyImageData}
          alt={asset.alt && asset.alt}
        />
      )}
    </a>
  );
};

CloakImage.propTypes = {
  asset: PropTypes.shape({
    alt: PropTypes.string,
    fluid: PropTypes.object,
  }).isRequired,
  url: PropTypes.string.isRequired,
};

export default CloakImage;
