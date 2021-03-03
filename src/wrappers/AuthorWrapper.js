import PropTypes from 'prop-types';
import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import styled from '@emotion/styled';
import PostsList from '../components/posts/PostsList';
import Seo from '../components/general/Seo';
import { DefaultLayout } from '../styles/global/layouts';
import { MainTitle } from '../styles/components/Titles';
import PortableText from '../components/portableText';

import theme from '../styles/global/theme';

const Bio = styled('div')`
  max-width: ${theme.contentWidth};
  margin: 0 auto;
`;

const Illu = styled('div')`
  max-width: 140px;
  margin: 100px auto 87px auto;
  .gatsby-image-wrapper {
    border-radius: 50%;
  }
`;

const AuthorWrapper = ({ author }) => {
  return (
    <>
      <Seo title={`${author.name} - clavier-meca.com`} />
      <DefaultLayout>
        <MainTitle>{author.name}</MainTitle>
        <Illu>
          <GatsbyImage
            image={author.image.asset.localFile.childImageSharp.gatsbyImageData}
            alt={author.image.asset.alt && author.image.asset.alt}
          />
        </Illu>
        <Bio>
          <PortableText blocks={author._rawBio} />
        </Bio>
      </DefaultLayout>
    </>
  );
};

AuthorWrapper.propTypes = {
  authors: PropTypes.array.isRequired,
};

export default AuthorWrapper;
