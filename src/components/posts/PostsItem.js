import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';

const PostItem = ({ post }) => {
  const imagePost =
    post.mainImage?.asset.localFile.childImageSharp.gatsbyImageData;

  const alt = post.mainImage?.alt;
  return (
    <>
      <h2>
        <Link to={`/${post.slug.current}`}>{post.title}</Link>
      </h2>
      {imagePost ? <GatsbyImage alt={alt ? alt : ''} image={imagePost} /> : ''}
    </>
  );
};

PostItem.propTypes = {
  post: PropTypes.shape({
    mainImage: PropTypes.shape({
      alt: PropTypes.string,
      asset: PropTypes.shape({
        localFile: PropTypes.shape({
          childImageSharp: PropTypes.shape({
            gatsbyImageData: PropTypes.object,
          }),
        }),
      }),
    }).isRequired,
    slug: PropTypes.shape({
      current: PropTypes.string.isRequired,
    }),
    title: PropTypes.string.isRequired,
  }),
};

export default PostItem;
