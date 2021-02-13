import React from 'react';
import styled from '@emotion/styled';
import theme from '../styles/global/theme';
import PostSlices from '../components/posts/PostSlices';
import PostIntro from '../components/posts/PostIntro';
// import Seo from '../components/general/Meta.Js';

const PostLayout = styled('div')`
  width: ${theme.maxWidth};
  max-width: 100%;
  margin: 0 auto;
`;

const PostWrapper = ({ post }) => {
  return (
    <>
      {/* <Seo title={post.title} /> */}
      <PostLayout>
        <PostIntro post={post} />
        <PostSlices content={post.content} />
      </PostLayout>
    </>
  );
};

export default PostWrapper;
