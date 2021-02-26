import React from 'react';
import PostsList from '../components/posts/PostsList';
import styled from '@emotion/styled';
import theme from '../styles/global/theme';
import mediaQueries from '../styles/global/mediaQueries';
import { MainTitle } from '../styles/components/Titles';
import { DefaultLayout } from '../styles/global/layouts';
import Seo from '../components/general/Seo';
import defaultSchema from '../schemas/defaultSchema';

const Error404Wrapper = ({ posts }) => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Clavier Meca',
    url: 'https://www.clavier-meca.com',
    logo:
      'https://clavier-meca.com/wp-content/uploads/2020/12/logo_clavier_meca.png',
    sameAs: 'https://www.facebook.com/Clavier-Meca-102753598401711',
  };

  const jsonSchema = JSON.stringify(schema);

  return (
    <>
      <Seo
        title="Clavier Meca, guide et comparatifs pour découvrir tout l'univers des claviers mécaniques."
        description="Clavier Meca est un site pour découvrir l'univers des claviers mécaniques, découvrez guides, infos, astuces sur les claviers, les switches mais aussi les touches."
        jsonSchema={jsonSchema}
      />
      <DefaultLayout>
        <MainTitle>Erreur 404</MainTitle>
        <p>La page que vous recherchez n'est plus ici.</p>
        <p>En attendant retrouvez notre sélection des meilleurs articles.</p>
        <PostsList posts={posts} />
      </DefaultLayout>
    </>
  );
};

export default Error404Wrapper;
