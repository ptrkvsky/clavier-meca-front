import PropTypes from 'prop-types';
import React from 'react';
import { graphql } from 'gatsby';
import CategoryWrapper from '../wrappers/CategoryWrapper';

const CategoryPage = ({ data }) => {
  const { categorie, postsCategorie } = data;
  return (
    <div>
      <CategoryWrapper title={categorie.title} posts={postsCategorie.nodes} />
    </div>
  );
};

CategoryPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export const query = graphql`
  query($categorySlug: String!) {
    categorie: sanityCategory(
      title: {}
      slug: { current: { eq: $categorySlug } }
    ) {
      title
    }
    postsCategorie: allSanityPost(
      filter: {
        categories: { elemMatch: { slug: { current: { eq: $categorySlug } } } }
      }
    ) {
      nodes {
        slug {
          _key
          current
        }
        mainImage {
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
        _key
        title
      }
    }
  }
`;

export default CategoryPage;
