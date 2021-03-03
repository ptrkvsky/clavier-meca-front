import PropTypes from 'prop-types';
import React from 'react';
import SiteMapList from '../components/sitemap/SiteMapList';
import { MainTitle } from '../styles/components/Titles';
import { DefaultLayout } from '../styles/global/layouts';

const PlanSiteWrapper = ({ posts, categories }) => {
  return (
    <DefaultLayout>
      <MainTitle>Plan de site</MainTitle>
      <SiteMapList posts={posts} categories={categories} />
    </DefaultLayout>
  );
};

PlanSiteWrapper.propTypes = {
  posts: PropTypes.array.isRequired,
};

export default PlanSiteWrapper;
