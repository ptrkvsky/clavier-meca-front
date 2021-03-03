import PropTypes from 'prop-types';
import React from 'react';
import { graphql } from 'gatsby';
import AuthorWrapper from '../wrappers/AuthorWrapper';

const AuthorPage = ({ data }) => <AuthorWrapper author={data.author} />;

AuthorPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export const query = graphql`
  query($authorSlug: String!) {
    author: sanityAuthor(slug: { current: { eq: $authorSlug } }) {
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
  }
`;

export default AuthorPage;
