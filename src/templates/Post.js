import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { graphql } from 'gatsby';
import PostWrapper from '../wrappers/PostWrapper';

const PostPage = ({ data, pageContext }) => {
  const { post } = data;
  const productsAmazon = pageContext.productsAmazon.ItemsResult.Items;

  return <PostWrapper productsAmazon={productsAmazon} post={post} />;
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
          _rawDescription
          hn
          title
          keyboards {
            keyboard {
              _id
              price
              mainImage {
                asset {
                  fixed(height: 120) {
                    ...GatsbySanityImageFixed_noBase64
                  }
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
                localFile {
                  childImageSharp {
                    gatsbyImageData(
                      placeholder: BLURRED
                      formats: [AUTO, WEBP, AVIF]
                    )
                  }
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
          rightCol
          subTitleCol
          titleCol
          _rawDescription
          hn
          title
          keyboardCol {
            _key
            urlAmazon
            urlMateriel
            title
            mainImage {
              asset {
                fixed(width: 269) {
                  ...GatsbySanityImageFixed_noBase64
                }
                localFile {
                  childImageSharp {
                    gatsbyImageData(
                      placeholder: BLURRED
                      formats: [AUTO, WEBP, AVIF]
                    )
                  }
                }
              }
            }
          }
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
                  localFile {
                    childImageSharp {
                      gatsbyImageData(
                        placeholder: BLURRED
                        formats: [AUTO, WEBP, AVIF]
                      )
                    }
                  }
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
              _rawPros
              _rawCons
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
              asin
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
                  localFile {
                    childImageSharp {
                      gatsbyImageData(
                        placeholder: BLURRED
                        formats: [AUTO, WEBP, AVIF]
                      )
                    }
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
                localFile {
                  childImageSharp {
                    gatsbyImageData(
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
    }
  }
`;

export default PostPage;
