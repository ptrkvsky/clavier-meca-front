import React from 'react';
import ComparatifItem from './ComparatifItem';

const Comparatifs = ({ posts }) => {
  return (
    <>
      <h2>Comparatifs claviers</h2>
      <article>
        {posts.map(post => (
          <ComparatifItem key={post._id} post={post} />
        ))}
      </article>
    </>
  );
};
export default Comparatifs;
