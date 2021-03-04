import React from 'react';
import PostsList from '../components/posts/PostsList';
import { MainTitle } from '../styles/components/Titles';
import { DefaultLayout } from '../styles/global/layouts';
import Seo from '../components/general/Seo';
import defaultSchema from '../schemas/defaultSchema';
import Banner from '../components/home/banner';
import Comparatifs from '../components/home/Comparatifs';

const IndexWrapper = ({ home }) => {
  const { postComparatifs, postGuides } = home;
  return (
    <>
      <Seo
        title="Clavier Meca, guide et comparatifs pour découvrir tout l'univers des claviers mécaniques."
        description="Clavier Meca est un site pour découvrir l'univers des claviers mécaniques, découvrez guides, infos, astuces sur les claviers, les switches mais aussi les touches."
        jsonSchema={defaultSchema}
      />
      <DefaultLayout>
        <Banner
          h1={home.h1}
          intro={home._rawIntro}
          image={home.mainImage.asset.localFile.childImageSharp.gatsbyImageData}
          alt={home.mainImage.alt}
        />
        <Comparatifs posts={postComparatifs} />
        <h2>Nos meilleurs guides autour du clavier</h2>
        <PostsList posts={postGuides} />
      </DefaultLayout>
    </>
  );
};

export default IndexWrapper;
