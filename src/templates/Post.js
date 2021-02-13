import PropTypes from 'prop-types';
import React from 'react';
import { graphql } from 'gatsby';
import PostWrapper from '../wrappers/PostWrapper';

const PostPage = ({ data }) => {
  const { post } = data;
  return <PostWrapper post={post} />;
};

PostPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export const query = graphql`
  query($slug: String!) {
    post: sanityPost(slug: { current: { eq: $slug } }) {
      id
      publishedAt(formatString: "DD MMMM YYYY", locale: "fr")
      author {
        slug {
          current
        }
        name
      }
      slug {
        current
      }
      categories {
        title
      }
      summary
      title
      content {
        ... on SanityHero {
          _key
          _type
          illustration {
            image {
              asset {
                fluid(maxWidth: 700) {
                  ...GatsbySanityImageFluid
                }
                title
              }
              caption
            }
          }
          bref {
            style
            children {
              text
            }
          }
          _rawBref(resolveReferences: { maxDepth: 10 })
        }
        ... on SanityHighlight {
          _key
          _type
          _rawContent(resolveReferences: { maxDepth: 10 })
        }
        ... on SanityBodySection {
          _key
          _type
          _rawBodyTextt
        }
        ... on SanityProductsSection {
          _key
          _type
          products {
            Hn
            title
            size
            product {
              url
              title
              _rawLongDesc
              mainImage {
                alt
                caption
                asset {
                  fluid {
                    ...GatsbySanityImageFluid
                  }
                  description
                }
              }
            }
            _type
          }
        }
        ... on SanitySwitchBlock {
          _key
          _type
          Hn
          switch {
            couleur {
              hex
            }
            type
            distanceDactivation
            distanceTotale
            forceDactionnement
            forceMaximale
            nom
            son {
              asset {
                id
                url
              }
            }
            mainImage {
              asset {
                fluid {
                  ...GatsbySanityImageFluid
                }
              }
            }
          }
        }
      }
    }
  }
`;

export default PostPage;
