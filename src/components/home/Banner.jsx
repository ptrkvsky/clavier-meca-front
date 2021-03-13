import PropTypes from 'prop-types';
import React from 'react';
import styled from '@emotion/styled';
import { GatsbyImage } from 'gatsby-plugin-image';
import fonts from '../../styles/global/fonts';
import mediaQueries from '../../styles/global/mediaQueries';
import PortableText from '../portableText';

const Grid = styled('section')`
  display: grid;
  grid-template-columns: 1fr 1fr;

  .container-title {
    position: relative;
  }

  ${mediaQueries.tabletLandscape} {
    display: block;
  }
`;

const ColLeft = styled('div')`
  display: flex;
  align-items: center;
  ${mediaQueries.mobile} {
    padding: 0 8px;
  }
`;

const ColRight = styled('div')`
  position: relative;
  z-index: 0;
  text-align: right;
  font-size: 0;
  line-height: 1;
`;

const Title = styled('h1')`
  position: absolute;
  z-index: 10;
  padding: 18px 18px 18px 0;
  margin-bottom: 84px;
  font-size: 90px;
  font-family: ${fonts.title};
  text-transform: uppercase;
  line-height: 1;
  background: ${(props) => props.theme.bg.main};

  ${mediaQueries.mobile} {
    position: relative;
    font-size: 43px;
    margin: 16px 0 23px;
    &:after{
      bottom: -1px;
      width: 93px;
      height: 13px;
    }
  }

  &:after {
    content: '';
    display: block;
    position: absolute;
    bottom: -32px;
    width: 128px;
    height: 20px;
    background-color: ${(props) => props.theme.colors.primary};
    ${mediaQueries.mobile} {
        bottom: -5px;
        width: 93px;
        height: 13px;
    }
  }
`;

const Intro = styled('div')`
  font-size: 24px;
  line-height: 30px;
  font-family: ${fonts.light};
  margin-top: 351px;
  ${mediaQueries.mobile} {
    margin-top: 0;
    font-size: 22px;
    line-height: 28px;
  }
`;

const Banner = ({
  h1, intro, image, alt,
}) => (
  <Grid>
    <ColLeft>
      <div>
        <div className="container-title">
          <Title>{h1}</Title>
        </div>
        <Intro>
          <PortableText blocks={intro} />
        </Intro>
      </div>
    </ColLeft>
    <ColRight>
      <GatsbyImage image={image} alt={alt} />
    </ColRight>
  </Grid>
);

Banner.propTypes = {
  alt: PropTypes.string,
  h1: PropTypes.string.isRequired,
  image: PropTypes.object.isRequired,
  intro: PropTypes.array.isRequired,
};

Banner.defaultProps = {
  alt: '',
};

export default Banner;
