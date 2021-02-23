import PropTypes from 'prop-types';
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

const CategoryWrapper = ({ posts, title }) => {
  return (
    <IndexLayout>
      <h1>{title}</h1>
      <PostsList posts={posts} />
    </IndexLayout>
  );
};

CategoryWrapper.propTypes = {
  posts: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
};

export default CategoryWrapper;
