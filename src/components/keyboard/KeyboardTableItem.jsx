import PropTypes from 'prop-types';
import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import CloakButton from '../helpers/CloakButton';

const KeyboardTableItem = ({ keyboard, position }) => {
  const price = keyboard?.Offers?.Listings[0]?.Price.Amount || keyboard.price;
  const image = keyboard.mainImage.asset.localFile.childImageSharp.gatsbyImageData;
  console.info(keyboard)
  return (
    <tr>
      <td className="cell pos">
        <span className="marker">#</span>
        {position}
      </td>
      <td className="cell photo">{image && <GatsbyImage image={image} />}</td>
      <td className="cell name">{keyboard.title}</td>
      <td className="cell price">
        {price}
        <span className="currency">€</span>
      </td>
      <td className="cell offer">
        <CloakButton url={keyboard.urlAmazon || keyboard.urlMateriel} content="Voir l'offre" />
      </td>
    </tr>
  );
};

KeyboardTableItem.propTypes = {
  keyboard: PropTypes.shape({
    Offers: PropTypes.shape({
      Listings: PropTypes.any,
    }),
    mainImage: PropTypes.shape({
      asset: PropTypes.shape({
        localFile: PropTypes.shape({
          childImageSharp: PropTypes.shape({
            gatsbyImageData: PropTypes.object,
          }),
        }),
      }),
    }),
    price: PropTypes.number,
    title: PropTypes.string,
    url: PropTypes.string,
  }).isRequired,
  position: PropTypes.number.isRequired,
};

export default KeyboardTableItem;
