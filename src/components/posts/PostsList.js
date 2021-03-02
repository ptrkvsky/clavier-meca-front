import PropTypes from 'prop-types';
import React from 'react';
import PostsItem from './PostsItem';

const PostsList = ({ posts }) => {
  return (
    <>
      {posts &&
        posts.map(
          post => post.slug && <PostsItem key={post.slug.current} post={post} />
        )}
    </>
  );
};

PostsList.propTypes = {
  posts: PropTypes.array.isRequired,
};

export default PostsList;
