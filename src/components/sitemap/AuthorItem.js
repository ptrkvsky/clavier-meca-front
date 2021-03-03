import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'gatsby';

const AuthorItem = ({ author }) => {
  return (
    <li>
      <Link to={`/auteur/${author.slug.current}`}>{author.name}</Link>
    </li>
  );
};

AuthorItem.propTypes = {
  posts: PropTypes.shape({
    slug: PropTypes.string,
  }).isRequired,
};

export default AuthorItem;
