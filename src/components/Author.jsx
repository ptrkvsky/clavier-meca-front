import PropTypes from 'prop-types';
import React from 'react';
import styled from '@emotion/styled';
import { GatsbyImage } from 'gatsby-plugin-image';
import theme from '../styles/global/theme';
import mediaQueries from '../styles/global/mediaQueries';
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
  ${mediaQueries.mobile}{
    grid-gap: 0;
  }

  .h3{
    margin-top: 0;
    ${mediaQueries.mobile}{
      margin: 6px 0 61px;
    }
  }

  .illu{
    font-size: 0;
    line-height: 0;
  }
  
  ${mediaQueries.mobile}{
    margin-top: 64px;
    grid-gap: 24px;
    grid-template-columns: 1fr;

    .illu {
      text-align: center;
    }
    .content {
      padding: 0 8px;
      font-size: 17px;
      line-height: 1.3;
    }
  }

  .gatsby-image-wrapper {
    border-radius: 50%;
  }
`;
const Author = ({ author }) => {
  const bioSliced = author._rawBio.slice(0, 2);
  return (
    <Article>
      <div className="illu">
        <GatsbyImage
          image={author.image.asset.localFile.childImageSharp.gatsbyImageData}
          alt={author.image.asset.alt && author.image.asset.alt}
        />
      </div>
      <div className="content">
        <TitleH3
          className="h3"
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
