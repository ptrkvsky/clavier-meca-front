import PropTypes from 'prop-types';
import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import styled from '@emotion/styled';
import slugify from 'slugify';
import KeyboardProsCons from './KeyboardProsCons';
import { TitleH3, TitleH4 } from '../../styles/components/Titles';
import CloakButton from '../helpers/CloakButton';
import PortableText from '../portableText';
import mediaQueries from '../../styles/global/mediaQueries';
import fonts from '../../styles/global/fonts';

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
  ${mediaQueries.mobile}{
    grid-template-columns: 1fr;
  }

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
    color: ${(props) => props.theme.colors.lighter};
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

    ${mediaQueries.mobile}{
      flex-direction: column;
    }

    dl {
      display: flex;
      align-items: center;
      margin-left: 24px;
      ${mediaQueries.mobile} {
        flex-direction: column;
      }
    }
    dt {
      padding: 0;
      font-family: ${fonts.title};
      text-transform: uppercase;
      letter-spacing: -1px;
    }
    dd {
      display: flex;
      align-items: baseline;
      margin: 0 24px 0 7px;
      padding: 0;
      font-family: ${fonts.light};
      &:last-child {
        margin-right: 0;
      }
    }
  }
`;

// eslint-disable-next-line max-len
const displaySwitch = (switchArrray) => switchArrray.map((switchItem) => <span>{switchItem.nom}</span>);

const KeyboardsSection = ({ keyboard, Hn }) => {
  const image = keyboard.mainImage.asset.localFile.childImageSharp.gatsbyImageData;

  const url = keyboard.urlAmazon || keyboard.urlMateriel;
  const idTitle = `#${slugify(keyboard.title)}`;
  // Amazon informations for V2 or A/B testing
  // const features = keyboard.ItemInfo?.Features.DisplayValues;
  // const price = keyboard.Offers?.Listings[0].Price.DisplayAmount;
  // const availability = keyboard.Offers?.Listings[0].Availability.Message;

  return (
    <Article>
      <StickyHeading>
        <div className="title-teaser">
          <KeyboardTitle id={idTitle} as={Hn}>
            {keyboard.title}
          </KeyboardTitle>
          <span className="teaser">{keyboard.teaser}</span>
        </div>
        <div className="button-wrapper">
          <CloakButton url={url} content="Voir l'offre" />
        </div>
      </StickyHeading>

      <div>
        <WrapperImageDesc>
          <div className="wrapper-image">
            <GatsbyImage image={image} alt={keyboard.mainImage.alt} />
          </div>
          <div className="wrapper-desc">
            <TitleH4>Points clefs</TitleH4>
            <dl>
              <dt>Gabarit :</dt>
              <dd>{keyboard.layout}</dd>

              <dt>Switches :</dt>
              <dd>{displaySwitch(keyboard.switchCategory)}</dd>

              <dt>RGB :</dt>
              <dd>{keyboard.rgb ? 'Oui' : 'Non'}</dd>
            </dl>
          </div>
        </WrapperImageDesc>
        <PortableText blocks={keyboard._rawShortDesc} />

        <KeyboardProsCons pros={keyboard._rawPros} cons={keyboard._rawCons} />

        <div className="button">
          <CloakButton url={url} content="Voir l'offre" />
        </div>
      </div>
    </Article>
  );
};

KeyboardsSection.propTypes = {
  Hn: PropTypes.string.isRequired,
  keyboard: PropTypes.shape({
    Hn: PropTypes.string.isRequired,
    _rawCons: PropTypes.array.isRequired,
    _rawPros: PropTypes.array.isRequired,
    _rawShortDesc: PropTypes.array.isRequired,
    keyboard: PropTypes.object.isRequired,
    layout: PropTypes.bool.isRequired,
    mainImage: PropTypes.shape({
      alt: PropTypes.any,
      asset: PropTypes.shape({
        localFile: PropTypes.shape({
          childImageSharp: PropTypes.shape({
            gatsbyImageData: PropTypes.any,
          }),
        }),
      }),
    }),
    rgb: PropTypes.string.isRequired,
    switchCategory: PropTypes.array.isRequired,
    teaser: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    urlAmazon: PropTypes.string.isRequired,
    urlMateriel: PropTypes.string.isRequired,
  }).isRequired,
};

export default KeyboardsSection;
