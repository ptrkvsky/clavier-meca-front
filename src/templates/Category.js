import PropTypes from 'prop-types';
import React from 'react';
import { graphql } from 'gatsby';
import PostWrapper from '../wrappers/PostWrapper';

const PostPage = ({ data }) => {
  const { categorie, postsCategorie } = data;
  return (
    <div>
      <h1>{categorie.title}</h1>
    </div>
  );
};

PostPage.propTypes = {
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
        id
        author {
          name
        }
      }
    }
  }
`;

export default PostPage;
