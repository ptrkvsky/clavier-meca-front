import React from 'react';
import PostsList from '../components/posts/PostsList';
import { MainTitle } from '../styles/components/Titles';
import { DefaultLayout } from '../styles/global/layouts';
import Seo from '../components/general/Seo';
import defaultSchema from '../schemas/defaultSchema';

const IndexWrapper = ({ posts }) => {
  return (
    <>
      <Seo
        title="Clavier Meca, guide et comparatifs pour découvrir tout l'univers des claviers mécaniques."
        description="Clavier Meca est un site pour découvrir l'univers des claviers mécaniques, découvrez guides, infos, astuces sur les claviers, les switches mais aussi les touches."
        jsonSchema={defaultSchema}
      />
      <DefaultLayout>
        <MainTitle>Clavier Meca </MainTitle>
        <PostsList posts={posts} />
      </DefaultLayout>
    </>
  );
};

export default IndexWrapper;
