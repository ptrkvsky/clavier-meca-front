import React from 'react';
import FormContact from '../forms/FormContact';
import { DefaultLayout } from '../styles/global/layouts';
import { MainTitle } from '../styles/components/Titles';

const PageContact = () => (
  <DefaultLayout>
    <MainTitle>Contact</MainTitle>
    <FormContact />
  </DefaultLayout>
);

export default PageContact;
