import React from 'react';
import CloakButton from '../helpers/CloakButton';
import styled from '@emotion/styled';
import theme from '../../styles/global/theme';
import Img from 'gatsby-image';

const Aside = styled('div')`
  position: sticky;
  top: 27px;
  padding-bottom: 27px;
  background-color: ${theme.colors.border};
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled('h2')`
  margin: 27px 0;
  text-align: center;
  font-size: 24px;
  font-family: ${theme.fonts.title};
  color: ${theme.colors.primary};
  letter-spacing: -1px;
  span {
    display: none;
  }
`;

const TitleProduct = styled('h3')`
  margin: 0 0 27px 0;
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
  font-family: ${theme.fonts.light};
  letter-spacing: -1px;
`;

const KeyboardAside = ({ keyboard, subTitleCol, titleCol }) => {
  console.info(keyboard, subTitleCol, titleCol);
  return (
    <Aside>
      <Img fixed={keyboard.mainImage.asset.fixed} />
      <Title>{titleCol}</Title>
      <TitleProduct>{keyboard.title}</TitleProduct>
      <SubTitle>{subTitleCol}</SubTitle>
      <CloakButton url={keyboard.urlAmazon} />
    </Aside>
  );
};

export default KeyboardAside;
