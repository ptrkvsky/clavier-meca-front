import React from 'react';
import { graphql } from 'gatsby';
import IndexWrapper from '../wrappers/IndexWrapper';

const IndexPage = ({ data }) => {
  const posts = data.posts.nodes;

  return <IndexWrapper posts={posts} />;
};

export const query = graphql`
  {
    posts: allSanityPost {
      nodes {
        categories {
          title
        }
        title
        home
        slug {
          current
        }
        mainImage {
          asset {
            fluid(maxWidth: 400) {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
    }
  }
`;

export default IndexPage;
