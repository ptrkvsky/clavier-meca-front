import React from 'react';
import { graphql } from 'gatsby';
import Error404Wrapper from '../wrappers/Error404Wrapper';

const Error404 = ({ data }) => {
  const posts = data.posts.nodes;

  const postsHome = posts.filter(post => post.home === true);
  return <Error404Wrapper posts={postsHome} />;
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

export default Error404;
