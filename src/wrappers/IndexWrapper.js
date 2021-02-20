import React from 'react';
import PostsList from '../components/posts/PostsList';
import styled from '@emotion/styled';
import theme from '../styles/global/theme';
import mediaQueries from '../styles/global/mediaQueries';

const IndexLayout = styled('div')`
  width: ${theme.maxWidth};
  max-width: 100%;
  margin: 0 auto;
  ${mediaQueries.tabletLandscape} {
    width: 100%;
  }
`;

const IndexWrapper = ({ posts }) => {
  return (
    <IndexLayout>
      <h1>Clavier Meca</h1>
      <PostsList posts={posts} />
    </IndexLayout>
  );
};

export default IndexWrapper;
