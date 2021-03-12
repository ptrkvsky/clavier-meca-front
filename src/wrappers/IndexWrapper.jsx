import PropTypes from 'prop-types';
import React from 'react';
import { DefaultLayout } from '../styles/global/layouts';
import Seo from '../components/general/Seo';
import defaultSchema from '../schemas/defaultSchema';
import Banner from '../components/home/Banner';
import Comparatifs from '../components/home/Comparatifs';
import Guides from '../components/home/Guides';

const IndexWrapper = ({ home }) => {
  const { postComparatifs, postGuides } = home;
  return (
    <>
      <Seo
        title={home.metaTitle}
        description={home.metaDescription}
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
        <Guides posts={postGuides} />
      </DefaultLayout>
    </>
  );
};

IndexWrapper.propTypes = {
  home: PropTypes.shape({
    _rawIntro: PropTypes.array.isRequired,
    h1: PropTypes.string.isRequired,
    mainImage: PropTypes.shape({
      alt: PropTypes.string.isRequired,
      asset: PropTypes.shape({
        localFile: PropTypes.shape({
          childImageSharp: PropTypes.shape({
            gatsbyImageData: PropTypes.object,
          }),
        }),
      }),
    }),
    metaDescription: PropTypes.string.isRequired,
    metaTitle: PropTypes.string.isRequired,
    postComparatifs: PropTypes.array.isRequired,
    postGuides: PropTypes.array.isRequired,
  }).isRequired,
};

export default IndexWrapper;
