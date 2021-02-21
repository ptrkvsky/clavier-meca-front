import React from 'react';
import styled from '@emotion/styled';
import { GatsbyImage } from "gatsby-plugin-image";
import CloakButton from '../helpers/CloakButton';

const KeyboardTableItemStyle = styled('h2')``;

const KeyboardTableItem = ({ keyboard, position }) => {
  return (
    <tr>
      <td className="cell pos">
        <span className="marker">#</span>
        {position}
      </td>
      <td className="cell photo">
        <GatsbyImage image={keyboard.mainImage.childImageSharp.gatsbyImageData} />
      </td>
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

export default KeyboardTableItem;
