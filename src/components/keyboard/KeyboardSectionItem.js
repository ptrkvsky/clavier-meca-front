import PropTypes from 'prop-types';
import React from 'react';
import Img from 'gatsby-image';
import { TitleH3, TitleH4 } from '../../styles/components/Titles';
import CloakButton from '../helpers/CloakButton';
import PortableText from '../portableText';

const displaySwitch = switchArrray => {
  return switchArrray.map(switchItem => <span>{switchItem.nom}</span>);
};

const KeyboardsSection = ({ keyboard }) => {
  const { Hn } = keyboard;
  const keyboardItem = keyboard.keyboard;
  console.info(keyboardItem.shortDesc, Hn);
  return (
    <article>
      <div className="block-title">
        <TitleH3 as={Hn}>{keyboardItem.title}</TitleH3>
        {keyboardItem.teaser}
        <CloakButton url={keyboardItem.url} />
      </div>
      <div>
        <div>
          <Img
            alt={keyboardItem.mainImage.alt}
            fluid={keyboardItem.mainImage.asset.fluid}
          />
        </div>
        <div>
          <TitleH4>Points clefs</TitleH4>
          <p>Gabarit : {keyboardItem.layout}%</p>
          <p>Switch : {displaySwitch(keyboardItem.switchCategory)}</p>
          <p>RGB : {keyboardItem.rgb ? 'Oui' : 'Non'}</p>
          <PortableText blocks={keyboardItem._rawShortDesc} />
        </div>
      </div>
    </article>
  );
};

KeyboardsSection.propTypes = {
  keyboard: PropTypes.shape({
    Hn: PropTypes.string.isRequired,
    keyboard: PropTypes.object.isRequired,
  }),
};

export default KeyboardsSection;
