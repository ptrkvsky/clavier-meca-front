import React from 'react';
import styled from '@emotion/styled';
import theme from '../../styles/global/theme';
import mediaQueries from '../../styles/global/mediaQueries';
import { GatsbyImage } from 'gatsby-plugin-image';
import PortableText from '../../components/portableText';

const Grid = styled('section')`
  display: grid;
  grid-template-columns: 1fr 1fr;

  .col-left {
    display: flex;
    align-items: center;
  }

  .container-title {
    position: relative;
  }

  ${mediaQueries.mobile} {
    grid-template-columns: 1fr;
  }
`;

const Title = styled('h1')`
  position: absolute;
  z-index: 10;
  background: #fff;
  padding: 18px 18px 18px 0;
  margin-bottom: 84px;
  font-size: 90px;
  font-family: ${theme.fonts.title};
  text-transform: uppercase;
  line-height: 1;
  background: #fff;

  ${mediaQueries.mobile} {
    position: relative;
    font-size: 35px;
  }

  &:after {
    content: '';
    display: block;
    position: absolute;
    bottom: -32px;
    width: 128px;
    height: 20px;
    background-color: ${theme.colors.primary};
  }
`;

const Intro = styled('div')`
  font-size: 24px;
  line-height: 30px;
  font-family: ${theme.fonts.light};
  margin-top: 351px;
  ${mediaQueries.mobile} {
    margin-top: 0;
  }
`;

const Banner = ({ h1, intro, image, alt }) => {
  return (
    <Grid>
      <div className="col-left">
        <div>
          <div className="container-title">
            <Title>{h1}</Title>
          </div>
          <Intro>
            <PortableText blocks={intro} />
          </Intro>
        </div>
      </div>
      <div>
        <GatsbyImage image={image} alt={alt} />
      </div>
    </Grid>
  );
};

export default Banner;
