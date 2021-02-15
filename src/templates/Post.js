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
        ... on SanityKeyboardsTable {
          _type
          keyboards {
            keyboard {
              _id
              price
              mainImage {
                asset {
                  fixed(height: 120) {
                    ...GatsbySanityImageFixed_noBase64
                  }
                }
                alt
              }
              urlAmazon
              urlMateriel
              slug {
                current
              }
              title
              rgb
            }
            title
          }
          Hn
          title
        }
        ... on SanityHero {
          _key
          _type
          padding
          illustration {
            image {
              asset {
                fluid(maxWidth: 700) {
                  ...GatsbySanityImageFluid_noBase64
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
        ... on SanityKeyboardsSection {
          _key
          _type
          keyboards {
            Hn
            title
            _key
            keyboard {
              _key
              mainImage {
                asset {
                  fluid {
                    base64
                    srcWebp
                    srcSetWebp
                  }
                  title
                }
                alt
                caption
              }
              price
              rgb
              _rawShortDesc
              slug {
                _key
                _type
                current
              }
              switchCategory {
                _key
                nom
              }
              teaser
              urlAmazon
              urlMateriel
              title
              layout
            }
          }
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
