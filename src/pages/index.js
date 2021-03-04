import React from 'react';
import { graphql } from 'gatsby';
import IndexWrapper from '../wrappers/IndexWrapper';

const IndexPage = ({ data }) => {
  const { home } = data;
  console.info(data);
  return <IndexWrapper home={home} />;
};

export const query = graphql`
  {
    home: sanityHome {
      h1
      _rawIntro(resolveReferences: { maxDepth: 10 })
      mainImage {
        alt
        asset {
          localFile {
            childImageSharp {
              gatsbyImageData(
                width: 568
                height: 758
                formats: [AUTO, WEBP, AVIF]
              )
            }
          }
        }
      }
      postComparatifs {
        _id
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
                  width: 760
                  height: 495
                  formats: [AUTO, WEBP, AVIF]
                )
              }
            }
          }
        }
      }
      postGuides {
        _id
        title
        slug {
          current
        }
        categories {
          slug {
            current
          }
        }
        mainImage {
          asset {
            localFile {
              childImageSharp {
                gatsbyImageData(
                  width: 421
                  height: 421
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
