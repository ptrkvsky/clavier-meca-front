import React from 'react';
import PostsList from '../components/posts/PostsList';
import styled from '@emotion/styled';
import theme from '../styles/global/theme';
import mediaQueries from '../styles/global/mediaQueries';
import { DefaultLayout } from '../styles/global/layouts';

const IndexWrapper = ({ posts }) => {
  return (
    <DefaultLayout>
      <h1>Clavier Meca</h1>
      <PostsList posts={posts} />
    </DefaultLayout>
  );
};

export default IndexWrapper;
