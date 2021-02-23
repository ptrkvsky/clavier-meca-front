import PropTypes from 'prop-types';
import React from 'react';
import PostsItem from './PostsItem';

const PostsList = ({ posts }) => {
  return (
    <>
      <h2>Voici les posts</h2>
      {posts &&
        posts.map(
          post => post.slug && <PostsItem key={post.slug} post={post} />
        )}
    </>
  );
};

PostsList.propTypes = {
  posts: PropTypes.array.isRequired,
};

export default PostsList;
