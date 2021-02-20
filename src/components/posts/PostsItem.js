import React from 'react';
import { Link } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

const PostItem = ({ post }) => {
  console.info(post.mainImage);

  const imagePost =
    post.mainImage?.asset.localFile.childImageSharp.gatsbyImageData;
  const { alt } = post.mainImage;
  console.info(alt);
  return (
    <>
      <h3>
        <Link to={post.slug.current}>{post.title}</Link>
      </h3>
      {imagePost && <GatsbyImage alt={alt} image={imagePost} />}
    </>
  );
};

export default PostItem;
