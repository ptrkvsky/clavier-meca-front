import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'gatsby';

const AuthorItem = ({ author }) => (
  <li>
    <Link to={`/auteur/${author.slug.current}`}>{author.name}</Link>
  </li>
);

AuthorItem.propTypes = {
  author: PropTypes.shape({
    name: PropTypes.string,
    slug: PropTypes.shape({
      current: PropTypes.string,
    }),
  }).isRequired,
};

export default AuthorItem;
