import PropTypes from 'prop-types';
import React from 'react';
import styled from '@emotion/styled';
import { GatsbyImage } from 'gatsby-plugin-image';
import CloakButton from '../helpers/CloakButton';
import fonts from '../../styles/global/fonts';

const Aside = styled('aside')`
  position: sticky;
  top: 27px;
  padding-bottom: 27px;
  background-color: ${(props) => props.theme.colors.border};
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled('h2')`
  margin: 27px 0;
  text-align: center;
  font-size: 24px;
  font-family: ${fonts.title};
  color: ${(props) => props.theme.colors.primary};
  letter-spacing: -1px;
  span {
    display: none;
  }
`;

const TitleProduct = styled('h3')`
  margin: 27px 0 27px;
  text-align: center;
  font-size: 22px;
  letter-spacing: -1px;
  span {
    display: none;
  }
`;

const SubTitle = styled('p')`
  margin: 0 0 27px 0;
  text-align: center;
  font-size: 18px;
  font-family: ${(props) => props.theme.fonts.light};
  letter-spacing: -1px;
`;

const KeyboardAside = ({ keyboard, subTitleCol, titleCol }) => {
  const image = keyboard.mainImage.asset.localFile.childImageSharp.gatsbyImageData;

  return (
    <Aside>
      {image && <GatsbyImage image={image} />}
      {titleCol && <Title>{titleCol}</Title>}
      <TitleProduct>{keyboard.title}</TitleProduct>
      <SubTitle>{subTitleCol}</SubTitle>
      <CloakButton url={keyboard.urlAmazon} content="Voir l'offre" />
    </Aside>
  );
};

KeyboardAside.propTypes = {
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
    title: PropTypes.string,
    urlAmazon: PropTypes.string,
  }).isRequired,
  subTitleCol: PropTypes.string.isRequired,
  titleCol: PropTypes.string.isRequired,
};

export default KeyboardAside;
