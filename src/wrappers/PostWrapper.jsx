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
import KeyboardAside from '../components/keyboard/KeyboardAside';

const PostLayout = styled('div')`
  width: ${theme.maxWidth};
  max-width: 100%;
  margin: 0 auto;

  ${mediaQueries.tabletLandscape} {
    width: 100%;
  }
`;

const Grid = styled('div')`
  display: ${props => (props.keyboard ? 'grid' : 'block')};
  grid-template-columns: 1fr 269px;
  grid-gap: 98px;
  ${mediaQueries.tabletLandscape} {
    grid-template-columns: 1fr;
  }
  .intro {
    ${mediaQueries.mobile} {
      padding-left: 8px;
    }
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
      const indexMoreOne = parseInt(index, 10) + 1;
      if (!h2.children.length > 0) {
        // Add 0 in front of index
        const hnNumber = `0${indexMoreOne}`.slice(-2);
        h2.innerHTML += `<span>${hnNumber}</span>`;
      }
    });
  }, []);

  return (
    <>
      <Seo title={post.metaTitle} description={post.metaDescription} />
      <PostLayout>
        <PostIntro post={post} />
        {tableOfContent && <TableOfContent tableOfContent={tableOfContent} />}
        <Grid
          className={post.keyboard ? 'aside' : 'no-aside'}
          keyboard={!!post.keyboard}
        >
          <div>
            <PostSlices
              content={post.content}
              keyboardsAmazon={keyboardsAmazon}
              tableOfContent={tableOfContent}
              productsAmazon={productsAmazon}
              setTableOfContent={setTableOfContent}
            />
          </div>

          {post.keyboard && (
            <div>
              <KeyboardAside
                keyboard={post.keyboard}
                subTitleCol={post.keyboard.teaser}
                titleCol=""
              />
            </div>
          )}
        </Grid>
        {post.categories[0].title !== 'Informations' ? (
          <Author author={post.author} />
        ) : (
          ''
        )}
      </PostLayout>
    </>
  );
};

PostWrapper.defaultProps = {
  keyboard: null,
};

PostWrapper.propTypes = {
  keyboard: PropTypes.object,
  keyboardsAmazon: PropTypes.array.isRequired,
  post: PropTypes.shape({
    author: PropTypes.object.isRequired,
    categories: PropTypes.array.isRequired,
    content: PropTypes.array.isRequired,
    keyboard: PropTypes.shape({
      teaser: PropTypes.string,
    }),
    metaDescription: PropTypes.string,
    metaTitle: PropTypes.string,
    title: PropTypes.string.isRequired,
  }).isRequired,
  productsAmazon: PropTypes.array.isRequired,
};

export default PostWrapper;
