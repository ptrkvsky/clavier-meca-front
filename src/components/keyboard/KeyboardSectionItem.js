import PropTypes from 'prop-types';
import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import styled from '@emotion/styled';
import KeyboardProsCons from './KeyboardProsCons';
import { TitleH3, TitleH4 } from '../../styles/components/Titles';
import CloakButton from '../helpers/CloakButton';
import PortableText from '../portableText';
import theme from '../../styles/global/theme';

const Article = styled('article')` 
  margin: 98px 0;
  &:first-child {
    margin-top 0;
  }
  .button {
    display: flex;
    justify-content: center;
    margin-top: 32px;
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
  const image =
    keyboardItem.mainImage.asset.localFile.childImageSharp.gatsbyImageData;

  const url = keyboardItem.urlAmazon || keyboardItem.urlMateriel;

  return (
    <Article>
      <StickyHeading>
        <div className="title-teaser">
          <KeyboardTitle as={Hn}>{keyboardItem.title}</KeyboardTitle>
          <span class="teaser">{keyboardItem.teaser}</span>
        </div>
        <div className="button-wrapper">
          <CloakButton url={url} />
        </div>
      </StickyHeading>

      <div>
        <WrapperImageDesc>
          <div class="wrapper-image">
            <GatsbyImage image={image} alt={keyboardItem.mainImage.alt} />
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
        <KeyboardProsCons
          pros={keyboardItem._rawPros}
          cons={keyboardItem._rawCons}
        />
        <div className="button">
          <CloakButton url={url} />
        </div>
      </div>
    </Article>
  );
};

KeyboardsSection.propTypes = {
  keyboard: PropTypes.shape({
    Hn: PropTypes.string.isRequired,
    keyboard: PropTypes.object.isRequired,
  }),
};

export default KeyboardsSection;
