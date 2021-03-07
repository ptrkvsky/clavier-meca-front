import PropTypes from 'prop-types';
import React from 'react';
import { graphql } from 'gatsby';
import PostWrapper from '../wrappers/PostWrapper';

const PostPage = ({ data, pageContext }) => {
  const { post } = data;
  const productsAmazon = pageContext.productsAmazon.ItemsResult.Items;
  const { keyboardsAmazon } = pageContext;

  return (
    <PostWrapper
      productsAmazon={productsAmazon}
      keyboardsAmazon={keyboardsAmazon}
      post={post}
    />
  );
};

PostPage.propTypes = {
  data: PropTypes.object.isRequired,
  pageContext: PropTypes.object.isRequired,
};

export const query = graphql`
  query($slug: String!) {
    post: sanityPost(slug: { current: { eq: $slug } }) {
      id
      publishedAt(formatString: "DD MMMM YYYY", locale: "fr")
      author {
        id
        image {
          asset {
            localFile {
              childImageSharp {
                gatsbyImageData(width: 140)
              }
            }
          }
        }
        _rawBio(resolveReferences: { maxDepth: 10 })
        name
        slug {
          current
        }
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
              asin
              price
              mainImage {
                asset {
                  localFile {
                    childImageSharp {
                      gatsbyImageData(
                        width: 421
                        height: 421
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
          _rawBodyTextt(resolveReferences: { maxDepth: 10 })
        }
        ... on SanityKeyboardsSection {
          _key
          _type
          _rawDescription
          hn
          rightCol
          subTitleCol
          title
          titleCol
          keyboardCol {
            _key
            urlAmazon
            urlMateriel
            title
            mainImage {
              asset {
                localFile {
                  childImageSharp {
                    gatsbyImageData(
                      width: 269
                      height: 179
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
              asin
              mainImage {
                asset {
                  title
                  localFile {
                    childImageSharp {
                      gatsbyImageData(
                        width: 783
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
