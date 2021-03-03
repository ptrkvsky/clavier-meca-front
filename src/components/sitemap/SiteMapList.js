import PropTypes from 'prop-types';
import React from 'react';
import CategorieItem from './CategorieItem';
import AuthorItem from './AuthorItem';

const SiteMapList = ({ posts, categories, authors }) => {
  return (
    <>
      {categories &&
        categories.map(categorie => (
          <CategorieItem
            key={categorie._id}
            categorie={categorie}
            posts={posts}
          />
        ))}
      <h2>Auteurs</h2>
      <ul>
        {authors &&
          authors.map(author => (
            <AuthorItem key={author._id} author={author} />
          ))}
      </ul>
    </>
  );
};

SiteMapList.propTypes = {
  authors: PropTypes.array.isRequired,
  categories: PropTypes.array.isRequired,
  posts: PropTypes.array.isRequired,
};

export default SiteMapList;
