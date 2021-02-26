import React from 'react';
import styled from '@emotion/styled';
import FormContact from '../forms/FormContact';
import { DefaultLayout } from '../styles/global/layouts';
import { MainTitle } from '../styles/components/Titles';
import theme from '../styles/global/theme';

const PageContact = () => (
  <DefaultLayout>
    <MainTitle>Contact</MainTitle>
    <FormContact />
  </DefaultLayout>
);

export default PageContact;
