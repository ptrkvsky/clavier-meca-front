import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';

const CloakImage = ({ asset, url, alt }) => {
  const [link, setLink] = useState('#');

  useEffect(() => {
    setLink(url);
  }, [link]);

  return (
    <a href={link} target="_blank" rel="noreferrer">
      {asset.fluid && (
        <GatsbyImage
          image={asset.localFile.childImageSharp.gatsbyImageData}
          alt={alt && alt}
        />
      )}
    </a>
  );
};

CloakImage.propTypes = {
  alt: PropTypes.string.isRequired,
  asset: PropTypes.shape({
    fluid: PropTypes.object,
    localFile: PropTypes.shape({
      childImageSharp: PropTypes.shape({
        gatsbyImageData: PropTypes.any,
      }).isRequired,
    }).isRequired,
  }).isRequired,
  url: PropTypes.string.isRequired,
};

export default CloakImage;
