import PropTypes from 'prop-types';
import React from 'react';
import styled from '@emotion/styled';
import theme from '../../styles/global/theme';
import mediaQueries from '../../styles/global/mediaQueries';

const PostIntroStyle = styled('div')`
  margin: 114px 0;
  display: grid;
  grid-template-columns: 1fr 760px 1fr;
  ${mediaQueries.tabletLandscape} {
    grid-template-columns: 1fr;
    grid-template-columns: 1fr;
    gap: 24px;
    margin: 64px 0;
  }
  ${mediaQueries.mobile} {
    grid-template-columns: 1fr;
    grid-template-rows: auto auto auto;
    gap: 16px;
    margin: 48px 0;
    padding: 0 8px;
  }
  
  h1 {
    margin: 0;
    padding: 0;
    font-size: 48px;
    line-height: 59px;
    font-family: ${theme.fonts.title};

    ${mediaQueries.mobile} {
      font-size: 35px;
      line-height: 35px;
    }
  }
  .info {
    font-size: 14px;
    line-height: 18px;
    text-transform: uppercase;
    color: ${(props) => props.theme.colors.lighter};
  }
  .categorie {
    position: relative;
    top: 11px;
  }
  .date-wrapper {
    text-align: right;
  }
`;

const PostIntro = ({ post }) => (
  <PostIntroStyle>
    <span className="info categorie">{post.categories[0].title}</span>
    <h1>{post.title}</h1>
    <div className="date-wrapper">
      <span className="info date">{post.publishedAt}</span>
    </div>
  </PostIntroStyle>
);

PostIntro.propTypes = {
  post: PropTypes.object.isRequired,
};

export default PostIntro;
