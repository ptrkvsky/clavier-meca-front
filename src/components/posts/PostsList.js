import PropTypes from 'prop-types';
import React from 'react';
import styled from '@emotion/styled';
import mediaQueries from '../../styles/global/mediaQueries';
import PostsItem from './PostsItem';

const Wrapper = styled('div')`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  ${mediaQueries.tabletLandscape} {
    grid-template-columns: 1fr 1fr;
  }
  ${mediaQueries.tabletLandscape} {
    grid-template-columns: 1fr;
  }
`;

const PostsList = ({ posts }) => {
  return (
    <Wrapper>
      {posts &&
        posts.map(
          post => post.slug && <PostsItem key={post.slug.current} post={post} />
        )}
    </Wrapper>
  );
};

PostsList.propTypes = {
  posts: PropTypes.array.isRequired,
};

export default PostsList;
