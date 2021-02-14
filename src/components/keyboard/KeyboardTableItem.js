import React from 'react';
import styled from '@emotion/styled';
import Img from 'gatsby-image';
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
        <Img fixed={keyboard.mainImage.asset.fixed} />
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
