import React from 'react';
import styled from '@emotion/styled';
import mediaQueries from '../../styles/global/mediaQueries';
import fonts from '../../styles/global/fonts';
import ComparatifItem from './ComparatifItem';

const Section = styled('div')`
  position: relative;

  &:after {
    content: '';
    display: block;
    position: absolute;
    transform: translate(-50%, -50%);
    top: 50%;
    left: 50%;
    width: 488px;
    height: 563px;
    background-color: ${props => props.theme.colors.primaryLighter};
    z-index: -1;
  }
`;

const Title = styled('h2')`
  position: relative;
  margin-bottom: 61px;
  font-size: 64px;
  font-family: ${fonts.title};
  letter-spacing: -1px;
  line-height: 1;

  &:after {
    content: '';
    display: block;
    position: absolute;
    bottom: -20px;
    width: 74px;
    height: 11px;
    background-color: ${props => props.theme.colors.primary};
  }
`;

const Comparatifs = ({ posts }) => {
  return (
    <section>
      <Title>Comparatifs claviers</Title>
      <Section>
        {posts.map((post, index) => (
          <ComparatifItem
            key={post._id}
            post={post}
            revert={index & 1 ? true : false}
          />
        ))}
      </Section>
    </section>
  );
};
export default Comparatifs;
