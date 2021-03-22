import PropTypes from 'prop-types';
import React from 'react';
import { graphql } from 'gatsby';
import PlanSiteWrapper from '../wrappers/PlanSiteWrapper';

const IndexPage = ({ data }) => {
  const authors = data.authors.nodes;
  const categories = data.categories.nodes;
  const postsArray = data.posts.nodes;
  const posts = postsArray.filter(post => post.isOnSitemap === true);
  console.info(posts);

  return (
    <PlanSiteWrapper authors={authors} categories={categories} posts={posts} />
  );
};

IndexPage.propTypes = {
  data: PropTypes.object.isRequired,
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
        isOnSitemap
        slug {
          current
        }
        categories {
          _id
          title
          slug {
            current
          }
        }
      }
    }
    categories: allSanityCategory {
      nodes {
        _id
        title
        slug {
          current
        }
      }
    }
  }
`;

export default IndexPage;
