import React from 'react';
import theme from '../../styles/global/theme';
import mediaQueries from '../../styles/global/mediaQueries';
import { GatsbyImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby';

const ComparatifItem = ({ post }) => {
  console.info(post);
  const { alt } = post.mainImage.alt;
  const image = post.mainImage.asset.localFile.childImageSharp.gatsbyImageData;

  return (
    <>
      <h3>
        <Link to={`/${post.slug.current}`}>{post.title}</Link>
      </h3>
      <Link to={`/${post.slug.current}`}>
        <GatsbyImage image={image} alt={alt} />
      </Link>
    </>
  );
};

export default ComparatifItem;
