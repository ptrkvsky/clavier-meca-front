import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'gatsby';

const PostItem = ({ post }) => <Link to={`/${post.slug.current}`}>{post.title}</Link>;

PostItem.propTypes = {
  post: PropTypes.shape({
    slug: PropTypes.shape({
      current: PropTypes.string,
    }),
    title: PropTypes.string,
  }).isRequired,
};

export default PostItem;
