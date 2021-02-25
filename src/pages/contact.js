import React from 'react';
import styled from '@emotion/styled';
import FormContact from '../forms/FormContact';
import { DefaultLayout } from '../styles/global/layouts';
import theme from '../styles/global/theme';

const Title = styled('h1')`
  margin-top: 100px;
  margin-bottom: 80px;
  font-size: 45px;
  line-height: 1.33;
  letter-spacing: 21px;
  font-family: ${theme.fonts.title};
  text-align: center;
  text-transform: uppercase;
`;

const PageContact = () => (
  <DefaultLayout>
    <Title className="txt-">Contact</Title>
    <FormContact />
  </DefaultLayout>
);

export default PageContact;
