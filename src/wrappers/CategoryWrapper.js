import PropTypes from 'prop-types';
import React from 'react';
import PostsList from '../components/posts/PostsList';
import Seo from '../components/general/Seo';
import { DefaultLayout } from '../styles/global/layouts';
import { MainTitle } from '../styles/components/Titles';

const CategoryWrapper = ({ posts, title }) => {
  return (
    <>
      <Seo title={`${title} - clavier-meca.com`} />
      <DefaultLayout>
        <MainTitle>{title}</MainTitle>
        <PostsList posts={posts} />
      </DefaultLayout>
    </>
  );
};

CategoryWrapper.propTypes = {
  posts: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
};

export default CategoryWrapper;
