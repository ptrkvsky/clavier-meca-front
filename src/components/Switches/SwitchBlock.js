import PropTypes from 'prop-types';
import React from 'react';
import ReactAudioPlayer from 'react-audio-player';
import PortableText from '../portableText';
import { GatsbyImage } from 'gatsby-plugin-image';
import styled from '@emotion/styled';
import theme from '../../styles/global/theme';
import mediaQueries from '../../styles/global/mediaQueries';
import SwitchDetails from './SwitchDetails';

const SwitchBlockStyled = styled('section')`
  margin-bottom: 90px;

  .grid {
    display: grid;
    grid-template-columns: 464px 1fr;
    grid-column-gap: 122px;
    ${mediaQueries.mobile} {
      grid-template-columns: 1fr;
    }
  }

  .switch-illustration {
    padding: 40px;
    background-color: ${props => (props.color ? props.color : 'purple')};
  }

  .switch-desc-wrapper {
    display: flex;
    align-items: center;
    justify-content: left;
  }

  .switch-desc {
    max-width: 100%;
    font-size: 32px;
    line-height: 44px;
    letter-spacing: -1px;
    font-family: ${theme.fonts.light};
  }

  .unite {
    font-size: 0.9em;
  }
`;

const SwitchTitle = styled('h2')`
  margin-top: 120px;
  margin-bottom: 80px;
  font-size: 45px;
  line-height: 1.33;
  letter-spacing: 21px;
  font-family: ${theme.fonts.title};
  text-align: center;
  text-transform: uppercase;
`;

const SwitchBlock = props => {
  const switchItem = props.switch;
  const { setTableOfContent } = props;
  const { tableOfContent } = props;
  const newTableOfContent = tableOfContent;
  const imgSwitch =
    switchItem.mainImage.asset.localFile?.childImageSharp?.gatsbyImageData;
  console.info(imgSwitch, switchItem.nom);
  newTableOfContent.push({
    hn: props.Hn,
    value: switchItem.nom,
  });

  setTableOfContent(newTableOfContent);

  return (
    <>
      <SwitchBlockStyled color={switchItem.couleur.hex}>
        <SwitchTitle as={props.Hn} className="switch-title">
          {switchItem.nom}
        </SwitchTitle>
        <div className="grid">
          <div className="switch-illustration">
            {imgSwitch && <GatsbyImage image={imgSwitch} />}
          </div>

          <div className="switch-desc-wrapper">
            <div className="switch-desc">
              <SwitchDetails switchItem={switchItem} />
              {switchItem.son && (
                <ReactAudioPlayer src={switchItem.son.asset.url} controls />
              )}
            </div>
          </div>
        </div>
      </SwitchBlockStyled>
    </>
  );
};

SwitchBlock.propTypes = {
  switch: PropTypes.shape({
    couleur: PropTypes.shape({
      hex: PropTypes.any,
    }),
    mainImage: PropTypes.shape({
      asset: PropTypes.shape({
        fluid: PropTypes.any,
      }),
    }),
    nom: PropTypes.any,
    son: PropTypes.shape({
      asset: PropTypes.shape({
        url: PropTypes.string,
      }),
    }),
  }),
};

export default SwitchBlock;
