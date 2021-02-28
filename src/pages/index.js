import React from 'react';
import { graphql } from 'gatsby';
import IndexWrapper from '../wrappers/IndexWrapper';

const IndexPage = ({ data }) => {
  const posts = data.posts.nodes;

  const postsHome = posts.filter(post => post.home === true);
  return <IndexWrapper posts={postsHome} />;
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
          alt
          asset {
            localFile {
              childImageSharp {
                gatsbyImageData(
                  width: 200
                  placeholder: BLURRED
                  formats: [AUTO, WEBP, AVIF]
                )
              }
            }
          }
        }
      }
    }
  }
`;

export default IndexPage;
