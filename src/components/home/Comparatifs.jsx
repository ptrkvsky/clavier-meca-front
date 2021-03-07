import PropTypes from 'prop-types';
import React from 'react';
import styled from '@emotion/styled';
import mediaQueries from '../../styles/global/mediaQueries';
import fonts from '../../styles/global/fonts';
import ComparatifItem from './ComparatifItem';

const Section = styled('div')`
  position: relative;

  &:after {
    content: '';
    z-index: 0;
    display: block;
    position: absolute;
    transform: translate(-50%, -50%);
    top: 50%;
    left: 50%;
    width: 488px;
    height: 563px;
    background-color: ${(props) => props.theme.colors.primary17};
    ${mediaQueries.mobile} {
      display: none;
    } 
  }
`;

const Title = styled('h2')`
  position: relative;
  margin-bottom: 61px;
  font-size: 64px;
  font-family: ${fonts.title};
  letter-spacing: -1px;
  line-height: 1;
  ${mediaQueries.mobile}{
    padding-left: 8px;
    padding-right: 8px;
    margin-bottom: 45px;
    font-size: 40px;
  }

  &:after {
    content: '';
    display: block;
    position: absolute;
    bottom: -21px;
    width: 74px;
    height: 11px;
    background-color: ${(props) => props.theme.colors.primary};
  }
`;

const Comparatifs = ({ posts }) => (
  <section>
    <Title>Comparatifs claviers</Title>
    <Section>
      {posts.map((post, index) => (
        <ComparatifItem
          // eslint-disable-next-line no-underscore-dangle
          key={post._id}
          post={post}
          // eslint-disable-next-line no-bitwise
          revert={!!(index & 1)}
        />
      ))}
    </Section>
  </section>
);

Comparatifs.propTypes = {
  posts: PropTypes.shape({
    map: PropTypes.func,
  }).isRequired,
};
export default Comparatifs;
