import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'gatsby';

const PostItem = ({ post }) => {
  return <Link to={`/${post.slug.current}`}>{post.title}</Link>;
};

PostItem.propTypes = {
  posts: PropTypes.shape({
    slug: PropTypes.string,
  }).isRequired,
};

export default PostItem;
