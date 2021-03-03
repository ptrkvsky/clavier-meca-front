import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import theme from '../styles/global/theme';
import mediaQueries from '../styles/global/mediaQueries';
import PostSlices from '../components/posts/PostSlices';
import PostIntro from '../components/posts/PostIntro';
import TableOfContent from '../components/TableOfContent';
import Seo from '../components/general/Seo';
import Author from '../components/Author';

const PostLayout = styled('div')`
  width: ${theme.maxWidth};
  max-width: 100%;
  margin: 0 auto;

  ${mediaQueries.tabletLandscape} {
    width: 100%;
  }
`;

const PostWrapper = ({ post, productsAmazon, keyboardsAmazon }) => {
  const [tableOfContent, setTableOfContent] = useState([]);

  // ADD NUMBER TO EVERY H2 IN MAIN CONTENT
  useEffect(() => {
    // Get All H2
    const h2Array = document.querySelectorAll('.numberh2 h2');

    [...h2Array].forEach((h2, index) => {
      // If there is no number add one
      const indexMoreOne = parseInt(index) + 1;
      if (!h2.children.length > 0) {
        // Add 0 in front of index
        const hnNumber = ('0' + indexMoreOne).slice(-2);
        h2.innerHTML += `<span>${hnNumber}</span>`;
      }
    });
  }, [tableOfContent, setTableOfContent]);
  console.info(post);
  return (
    <>
      <Seo title={post.title} />
      <PostLayout>
        <PostIntro post={post} />
        {tableOfContent && <TableOfContent tableOfContent={tableOfContent} />}

        <PostSlices
          content={post.content}
          keyboardsAmazon={keyboardsAmazon}
          tableOfContent={tableOfContent}
          productsAmazon={productsAmazon}
          setTableOfContent={setTableOfContent}
        />
        {post.categories[0].title !== 'Informations' ? (
          <Author author={post.author} />
        ) : (
          ''
        )}
      </PostLayout>
    </>
  );
};

PostWrapper.propTypes = {
  keyboardsAmazon: PropTypes.array.isRequired,
  post: PropTypes.shape({
    content: PropTypes.any,
    title: PropTypes.any,
  }),
  productsAmazon: PropTypes.array.isRequired,
};

export default PostWrapper;
