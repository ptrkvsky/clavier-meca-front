import PropTypes from 'prop-types';
import React from 'react';
import styled from '@emotion/styled';
import theme from '../styles/global/theme';
import mediaQueries from '../styles/global/mediaQueries';
import { GatsbyImage } from 'gatsby-plugin-image';
import PortableText from './portableText';
import { TitleH3 } from '../styles/components/Titles';
import CloakButton from './helpers/CloakButton';

const Article = styled('article')`
  display: grid;
  grid-template-columns: 140px auto;
  max-width: ${theme.contentWidth};
  margin: 0 auto;
  grid-gap: 64px;
  margin-top: 114px;

  .gatsby-image-wrapper {
    border-radius: 50%;
  }
`;
const Author = ({ author }) => {
  console.info(author._rawBio);
  const bioSliced = author._rawBio.slice(0, 2);
  return (
    <Article>
      <div className="illu">
        <GatsbyImage
          image={author.image.asset.localFile.childImageSharp.gatsbyImageData}
          alt={author.image.asset.alt && author.image.asset.alt}
        />
      </div>
      <div>
        <TitleH3
          css={{
            marginTop: 0,
          }}
        >
          {author.name}
        </TitleH3>
        <PortableText blocks={bioSliced} />
        <CloakButton
          url={`/auteur/${author.slug.current}`}
          content="En savoir plus"
        />
      </div>
    </Article>
  );
};

Author.propTypes = {
  author: PropTypes.object.isRequired,
};

export default Author;
