import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { Link } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import styled from '@emotion/styled';
import mediaQueries from '../../styles/global/mediaQueries';
import fonts from '../../styles/global/fonts';

const WrapperTitle = styled(Link)`
  padding: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  background: ${props => (props.hover ? props.theme.colors.primary17 : '')};
  transition: all 0.25s linear;

  ${mediaQueries.mobile} {
    display: block;
    padding: 0 8px;
  }
`;

const Title = styled('h3')`
  position: relative;
  bottom: 15px;
  font-family: ${fonts.title};
  letter-spacing: -1px;
  font-size: 24px;
  text-align: center;

  ${mediaQueries.mobile} {
    bottom: 0;
    font-size: 27px;
    line-height: 1;
    font-family: ${fonts.main};
  }
`;

const WrapperImage = styled(Link)`
  position: relative;
  &:after {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 0px;
    width: 100%;
    height: 100%;
    opacity: ${props => (props.hover ? 1 : 0)};
    background: ${props =>
      props.hover ? props.theme.colors.primary17 : 'transparent'};
    mix-blend-mode: multiply;
    transition: all 0.3s linear;
  }
`;

const PostItem = ({ post }) => {
  const [hoverState, setHoverState] = useState(false);

  const handleEnter = () => {
    setHoverState(true);
  };
  const handleLeave = () => {
    setHoverState(false);
  };

  const imagePost =
    post.mainImage?.asset.localFile.childImageSharp.gatsbyImageData;
  const alt = post.mainImage?.alt;

  return (
    <>
      <WrapperTitle
        to={`/${post.slug.current}`}
        hover={hoverState}
        onMouseEnter={handleEnter}
        onMouseLeave={handleLeave}
      >
        <Title>{post.title}</Title>
      </WrapperTitle>
      {imagePost ? (
        <WrapperImage
          to={`/${post.slug.current}`}
          title={post.title}
          onMouseEnter={handleEnter}
          onMouseLeave={handleLeave}
          hover={hoverState}
        >
          <GatsbyImage alt={alt && alt} image={imagePost.split(' ').join('')} />
        </WrapperImage>
      ) : (
        ''
      )}
    </>
  );
};

PostItem.propTypes = {
  post: PropTypes.shape({
    mainImage: PropTypes.shape({
      alt: PropTypes.string,
      asset: PropTypes.shape({
        localFile: PropTypes.shape({
          childImageSharp: PropTypes.shape({
            gatsbyImageData: PropTypes.object,
          }),
        }),
      }),
    }).isRequired,
    slug: PropTypes.shape({
      current: PropTypes.string.isRequired,
    }),
    title: PropTypes.string.isRequired,
  }).isRequired,
};

export default PostItem;
