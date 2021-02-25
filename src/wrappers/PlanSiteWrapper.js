import PropTypes from 'prop-types';
import React from 'react';
import SiteMapList from '../components/sitemap/SiteMapList';
import styled from '@emotion/styled';
import theme from '../styles/global/theme';
import mediaQueries from '../styles/global/mediaQueries';
import { DefaultLayout } from '../styles/global/layouts';

const PlanSiteWrapper = ({ posts, categories }) => {
  return (
    <DefaultLayout>
      <h1>Plan de site</h1>
      <SiteMapList posts={posts} categories={categories} />
    </DefaultLayout>
  );
};

PlanSiteWrapper.propTypes = {
  posts: PropTypes.array.isRequired,
};

export default PlanSiteWrapper;
