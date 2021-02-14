import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import theme from '../styles/global/theme';
import PostSlices from '../components/posts/PostSlices';
import PostIntro from '../components/posts/PostIntro';
import TableOfContent from '../components/TableOfContent';

const PostLayout = styled('div')`
  width: ${theme.maxWidth};
  max-width: 100%;
  margin: 0 auto;
`;

const PostWrapper = ({ post }) => {
  const [tableOfContent, setTableOfContent] = useState([]);
  console.info(post);
  // ADD NUMBER TO EVERY H2 IN MAIN CONTENT
  useEffect(() => {
    // Get All H2
    const h2Array = document.querySelectorAll('#main-content h2');
    [...h2Array].forEach((h2, index) => {
      // If there is no number add one
      const indexMoreOne = parseInt(index) + 1;
      if (!h2.children.length > 0) {
        // Add 0 in front of index
        const hnNumber = ('0' + indexMoreOne).slice(-2);
        h2.innerHTML += `<span>${hnNumber}</span>`;
      }
    });
  }, []);

  return (
    <>
      {/* <Seo title={post.title} /> */}
      <PostLayout>
        <PostIntro post={post} />
        {tableOfContent.length > 0 && (
          <TableOfContent tableOfContent={tableOfContent} />
        )}
        <div id="main-content">
          <PostSlices
            content={post.content}
            tableOfContent={tableOfContent}
            setTableOfContent={setTableOfContent}
          />
        </div>
      </PostLayout>
    </>
  );
};

export default PostWrapper;
