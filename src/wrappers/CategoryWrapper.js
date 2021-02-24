import PropTypes from 'prop-types';
import React from 'react';
import PostsList from '../components/posts/PostsList';
import styled from '@emotion/styled';
import theme from '../styles/global/theme';
import mediaQueries from '../styles/global/mediaQueries';
import { DefaultLayout } from '../styles/global/layouts';

const CategoryWrapper = ({ posts, title }) => {
  return (
    <DefaultLayout>
      <h1>{title}</h1>
      <PostsList posts={posts} />
    </DefaultLayout>
  );
};

CategoryWrapper.propTypes = {
  posts: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
};

export default CategoryWrapper;
