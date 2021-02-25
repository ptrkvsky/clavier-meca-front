import React from 'react';
import { graphql } from 'gatsby';
import PlanSiteWrapper from '../wrappers/PlanSiteWrapper';

const IndexPage = ({ data }) => {
  const posts = data.posts.nodes;
  const categories = data.categories.nodes;

  return <PlanSiteWrapper posts={posts} categories={categories} />;
};

export const query = graphql`
  {
    posts: allSanityPost {
      nodes {
        _id
        title
        slug {
          current
        }
        categories {
          slug {
            current
          }
        }
      }
    }
    categories: allSanityCategory {
      nodes {
        title
        slug {
          current
        }
        _id
      }
    }
  }
`;

export default IndexPage;
