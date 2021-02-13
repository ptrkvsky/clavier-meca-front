import React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';

const PostItem = ({ post }) => {
  return (
    <>
      <h3>
        <Link to={post.slug.current}>{post.title}</Link>
      </h3>
      {post.mainImage && <Img fluid={post.mainImage.asset.fluid} />}
    </>
  );
};

export default PostItem;
