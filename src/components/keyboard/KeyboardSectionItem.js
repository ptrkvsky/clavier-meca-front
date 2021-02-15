import PropTypes from 'prop-types';
import React from 'react';
import Img from 'gatsby-image';
import { GiKeyboard as KeyboardIcon } from '@react-icons/all-files/gi/GiKeyboard';
import { MdKeyboardArrowDown as SwitchIcon } from '@react-icons/all-files/md/MdKeyboardArrowDown';
import { FaRegLightbulb as LightIcon } from '@react-icons/all-files/fa/FaRegLightbulb';

import styled from '@emotion/styled';
import { TitleH3, TitleH4 } from '../../styles/components/Titles';
import CloakButton from '../helpers/CloakButton';
import PortableText from '../portableText';
import theme from '../../styles/global/theme';

const Article = styled('article')` 
  margin: 114px 0;
  &:first-child {
    margin-top 0;
  }
`;

const StickyHeading = styled('div')`
  position: relative;
  display: grid;
  grid-template-columns: 466px 1fr;
  gap: 24px;

  .button-wrapper {
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }
  .teaser {
    position: absolute;
    bottom: 44px;
    left: 98px;
    font-size: 16px;
    color: ${theme.colors.lighter};
  }
`;

const KeyboardTitle = styled(TitleH3)`
  margin-top: 0;
`;

const WrapperImageDesc = styled('div')`
  .wrapper-image {
    height: 309px;
    .gatsby-image-wrapper {
      height: 100%;
    }
  }

  .wrapper-desc {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: baseline;
    border-bottom: 8px solid #000;
    margin-bottom: 59px;
    dl {
      display: flex;
      align-items: center;
      margin-left: 24px;
    }
    dt {
      padding: 0;
      font-family: ${theme.fonts.title};
      text-transform: uppercase;
      letter-spacing: -1px;
    }
    dd {
      display: flex;
      align-items: baseline;
      margin: 0 24px 0 7px;
      padding: 0;
      font-family: ${theme.fonts.light};
      &:last-child {
        margin-right: 0;
      }
    }
  }
`;

const displaySwitch = switchArrray => {
  return switchArrray.map(switchItem => <span>{switchItem.nom}</span>);
};

const KeyboardsSection = ({ keyboard }) => {
  const { Hn } = keyboard;
  const keyboardItem = keyboard.keyboard;

  return (
    <article>
      <StickyHeading>
        <div className="title-teaser">
          <KeyboardTitle as={Hn}>{keyboardItem.title}</KeyboardTitle>
          <span class="teaser">{keyboardItem.teaser}</span>
        </div>
        <div className="button-wrapper">
          <CloakButton url={keyboardItem.url} />
        </div>
      </StickyHeading>

      <div>
        <WrapperImageDesc>
          <div class="wrapper-image">
            <Img
              alt={keyboardItem.mainImage.alt}
              fluid={keyboardItem.mainImage.asset.fluid}
            />
          </div>
          <div class="wrapper-desc">
            <TitleH4>Points clefs</TitleH4>
            <dl>
              <dt>Gabarit :</dt>
              <dd>{keyboardItem.layout}</dd>

              <dt>Switches :</dt>
              <dd>{displaySwitch(keyboardItem.switchCategory)}</dd>

              <dt>RGB :</dt>
              <dd>{keyboardItem.rgb ? 'Oui' : 'Non'}</dd>
            </dl>
          </div>
        </WrapperImageDesc>
        <PortableText blocks={keyboardItem._rawShortDesc} />
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
