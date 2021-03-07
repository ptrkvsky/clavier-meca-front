/* eslint-disable react/forbid-prop-types */
import PropTypes from 'prop-types';
import React from 'react';
import styled from '@emotion/styled';
import mediaQueries from '../../styles/global/mediaQueries';
import fonts from '../../styles/global/fonts';
import PostsList from '../posts/PostsList';

const Section = styled('section')`
  margin-top: 128px;
  ${mediaQueries.mobile}{
    margin-top: 32px;
  }
`;

const Title = styled('h2')`
  position: relative;
  font-size: 64px;
  line-height: 1;
  font-family: ${fonts.title};
  letter-spacing: -1px;

  ${mediaQueries.mobile}{
    font-size: 40px;
    padding: 0 8px;
  }

  &:after {
    content: '';
    display: block;
    position: absolute;
    bottom: -20px;
    width: 74px;
    height: 11px;
    background-color: ${(props) => props.theme.colors.primary};
  }
`;

const Guides = ({ posts }) => (
  <Section>
    <Title>Nos meilleurs guides autour du clavier</Title>
    <PostsList posts={posts} />
  </Section>
);

export default Guides;
Guides.propTypes = {
  posts: PropTypes.array.isRequired,
};
