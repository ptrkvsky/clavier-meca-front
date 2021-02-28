import PropTypes from 'prop-types';
import React from 'react';
import CategorieItem from './CategorieItem';

const SiteMapList = ({ posts, categories }) => {
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
    </>
  );
};

SiteMapList.propTypes = {
  categories: PropTypes.array.isRequired,
  posts: PropTypes.array.isRequired,
};

export default SiteMapList;
