import React from 'react';
import styled from '@emotion/styled';
import theme from '../../styles/global/theme';
import mediaQueries from '../../styles/global/mediaQueries';
import { GatsbyImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby';

const Grid = styled('article')`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-areas: 'col1 col2';
  margin-bottom: 61px;
`;

const ImageContainer = styled(Link)`
  grid-area: col1;
  .revert & {
    grid-area: col2;
  }
`;

const ColLeft = styled('div')`
  display: flex;
  grid-area: col2;
  align-items: center;
  position: relative;
  left: -60px;

  .revert & {
    grid-area: col1;
    left: initial;
    right: -60px;
  }
`;

const Title = styled('h3')`
  padding: 24px;
  font-size: 48px;
  letter-spacing: -2px;
  background-color: ${props => props.theme.colors.revert};
  a {
    text-decoration: none;
  }
`;

const ComparatifItem = ({ post, revert }) => {
  const { alt } = post.mainImage.alt;
  const image = post.mainImage.asset.localFile.childImageSharp.gatsbyImageData;

  return (
    <Grid className={`${revert ? 'revert' : ''}`}>
      <ImageContainer to={`/${post.slug.current}`}>
        <GatsbyImage image={image} alt={alt} />
      </ImageContainer>
      <ColLeft>
        <Title>
          <Link to={`/${post.slug.current}`}>{post.title}</Link>
        </Title>
      </ColLeft>
    </Grid>
  );
};

export default ComparatifItem;
