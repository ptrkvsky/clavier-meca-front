import React from 'react';
import PostsItem from './PostsItem';

const PostsList = ({ posts }) => {
  return (
    <>
      <h2>Voici les posts</h2>
      {posts.map(
        post => post.slug && <PostsItem key={post.slug} post={post} />
      )}
    </>
  );
};

export default PostsList;
