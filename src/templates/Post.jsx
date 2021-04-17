import PropTypes from 'prop-types';
import React from 'react';
import { graphql } from 'gatsby';
import PostWrapper from '../wrappers/PostWrapper';

const PostPage = ({ data }) => {
  const { post } = data;
  const productsAmazon = [];
  const keyboardsAmazon = [];
  return (
    <PostWrapper
      post={post}
      productsAmazon={productsAmazon}
      keyboardsAmazon={keyboardsAmazon}
    />
  );
};

PostPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export const query = graphql`
  query($slug: String!) {
    post: sanityPost(slug: { current: { eq: $slug } }) {
      id
      metaTitle
      metaDescription
      publishedAt(formatString: "DD MMMM YYYY", locale: "fr")
      keyboard {
        id
        urlAmazon
        title
        mainImage {
          alt
          asset {
            localFile {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
        }
        teaser
      }
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
      title
      content {
        ... on SanityIllustration {
          _key
          image {
            alt
            asset {
              localFile {
                childImageSharp {
                  gatsbyImageData(
                    width: 760
                    placeholder: BLURRED
                    formats: [AUTO, WEBP, AVIF]
                  )
                }
              }
            }
            alt
          }
        }
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
                alt
                asset {
                  localFile {
                    childImageSharp {
                      gatsbyImageData(
                        width: 220
                        height: 150
                        placeholder: BLURRED
                        formats: [AUTO, WEBP, AVIF]
                      )
                    }
                  }
                }
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
              alt
              asset {
                localFile {
                  childImageSharp {
                    gatsbyImageData(
                      width: 575
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
              alt
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
                alt
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
              alt
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
