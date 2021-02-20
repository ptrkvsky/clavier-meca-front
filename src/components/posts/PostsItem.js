import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

const PostItem = ({ post }) => {
  if (post.mainImage) {
    const imagePost =
      post.mainImage?.asset.localFile.childImageSharp.gatsbyImageData;
    const { alt } = post.mainImage;
  }

  return (
    <>
      <h3>
        <Link to={post.slug.current}>{post.title}</Link>
      </h3>
      {imagePost && <GatsbyImage alt={alt} image={imagePost} />}
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
