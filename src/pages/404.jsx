import PropTypes from 'prop-types';
import React from 'react';
import { graphql } from 'gatsby';
import Error404Wrapper from '../wrappers/Error404Wrapper';

const Error404 = ({ data }) => {
  const posts = data.posts.nodes;
  return <Error404Wrapper posts={posts} />;
};

export const query = graphql`
  {
    posts: allSanityPost {
      nodes {
        categories {
          title
        }
        title
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

Error404.propTypes = {
  data: PropTypes.shape({
    posts: PropTypes.shape({
      nodes: PropTypes.array.isRequired,
    }),
  }).isRequired,
};

export default Error404;
