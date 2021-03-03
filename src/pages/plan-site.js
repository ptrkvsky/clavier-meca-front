import React from 'react';
import { graphql } from 'gatsby';
import PlanSiteWrapper from '../wrappers/PlanSiteWrapper';

const IndexPage = ({ data }) => {
  console.info(data);
  const authors = data.authors.nodes;
  const categories = data.categories.nodes;
  const posts = data.posts.nodes;

  return (
    <PlanSiteWrapper authors={authors} categories={categories} posts={posts} />
  );
};

export const query = graphql`
  {
    authors: allSanityAuthor {
      nodes {
        slug {
          current
        }
        name
        _id
      }
    }
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
