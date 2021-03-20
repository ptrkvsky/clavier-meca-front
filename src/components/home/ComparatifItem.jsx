import PropTypes from 'prop-types';
import React from 'react';
import styled from '@emotion/styled';
import { GatsbyImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby';
import mediaQueries from '../../styles/global/mediaQueries';

const Grid = styled('article')`
  position: relative;
  z-index: 10;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-areas: 'col1 col2';
  margin-bottom: 61px;
  ${mediaQueries.mobile}{
    display: block;
    margin-bottom: 32px;
  }

`;

const LinkItem = styled(Link)`
    text-decoration: none;
    &:hover {
      cursor: pointer;
      color: ${(props) => props.theme.colors.primary};
    }
`;

const ImageContainer = styled('div')`
  display: block;
  grid-area: col1;
  .revert & {
    grid-area: col2;
  }
  ${mediaQueries.mobile}{
    font-size: 0;
    line-height: 0;
  }
`;

const ColLeft = styled('div')`
  display: flex;
  grid-area: col2;
  align-items: center;
  position: relative;
  left: -60px;
  ${mediaQueries.mobile}{
    left: 0px;
  }

  .revert & {
    grid-area: col1;
    left: initial;
    right: -60px;
    ${mediaQueries.mobile}{
      right: 0;
    }
  }
`;

const Title = styled('h3')`
  padding: 24px;
  font-size: 48px;
  letter-spacing: -2px;
  background-color: ${(props) => props.theme.colors.revert};
  ${mediaQueries.mobile}{ 
    font-size: 27px;
    padding: 0 8px;
    margin: 10px 0;
    line-height: 1.1;
  }
`;

const ComparatifItem = ({ post, revert }) => {
  const { alt } = post.mainImage;
  const image = post.mainImage.asset.localFile.childImageSharp.gatsbyImageData;

  return (
    <LinkItem
      title={post.title}
      to={`/${post.slug.current}`}
    >
      <Grid className={`${revert ? 'revert' : ''}`}>
        <div>
          <ImageContainer>
            <GatsbyImage image={image} alt={alt} />
          </ImageContainer>
        </div>
        <ColLeft>
          <Title>
            {post.title}
          </Title>
        </ColLeft>
      </Grid>
    </LinkItem>
  );
};

ComparatifItem.propTypes = {
  post: PropTypes.shape({
    mainImage: PropTypes.shape({
      alt: PropTypes.string,
      asset: PropTypes.shape({
        localFile: PropTypes.shape({
          childImageSharp: PropTypes.shape({
            gatsbyImageData: PropTypes.object.isRequired,
          }),
        }),
      }),
    }),
    slug: PropTypes.shape({
      current: PropTypes.string.isRequired,
    }),
    title: PropTypes.string.isRequired,
  }).isRequired,
  revert: PropTypes.bool.isRequired,
};

export default ComparatifItem;
