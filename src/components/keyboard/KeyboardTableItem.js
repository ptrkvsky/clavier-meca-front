import PropTypes from 'prop-types';
import React from 'react';
import styled from '@emotion/styled';
import { GatsbyImage } from 'gatsby-plugin-image';
import CloakButton from '../helpers/CloakButton';

const KeyboardTableItemStyle = styled('h2')``;

const KeyboardTableItem = ({ keyboard, position }) => {
  const image =
    keyboard.mainImage.asset.localFile.childImageSharp.gatsbyImageData;
  return (
    <tr>
      <td className="cell pos">
        <span className="marker">#</span>
        {position}
      </td>
      <td className="cell photo">{image && <GatsbyImage image={image} />}</td>
      <td className="cell name">{keyboard.title}</td>
      <td className="cell price">
        {keyboard.price}
        <span className="currency">€</span>
      </td>
      <td className="cell offer">
        <CloakButton url={keyboard.url} />
      </td>
    </tr>
  );
};

KeyboardTableItem.propTypes = {
  keyboard: PropTypes.shape({
    mainImage: PropTypes.shape({
      asset: PropTypes.shape({
        localFile: PropTypes.shape({
          childImageSharp: PropTypes.shape({
            gatsbyImageData: PropTypes.object,
          }),
        }),
      }),
    }),
    price: PropTypes.string,
    title: PropTypes.string,
    url: PropTypes.string,
  }).object,
  position: PropTypes.string.isRequired,
};

export default KeyboardTableItem;
