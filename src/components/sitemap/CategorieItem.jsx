import PropTypes from 'prop-types';
import React from 'react';
import PostItem from './PostItem';

const CategorieItem = ({ categorie, posts }) => {
  // Filter post by categories
  const postsFiltered = posts.filter(
    post => post.categories[0].slug.current === categorie.slug.current
  );

  return (
    <>
      {postsFiltered.length > 0 && (
        <>
          <h2>{categorie.title}</h2>
          <ul>
            {postsFiltered.map(post => (
              <li>
                <PostItem key={post._id} post={post} />
              </li>
            ))}
          </ul>
        </>
      )}
    </>
  );
};

CategorieItem.propTypes = {
  categorie: PropTypes.shape({
    slug: PropTypes.string,
    title: PropTypes.string,
  }).isRequired,
  posts: PropTypes.array.isRequired,
};

export default CategorieItem;
