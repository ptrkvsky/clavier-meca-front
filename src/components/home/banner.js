import React from 'react';
import styled from '@emotion/styled';
import { GatsbyImage } from 'gatsby-plugin-image';
import { motion } from "framer-motion"
import theme from '../../styles/global/theme';
import mediaQueries from '../../styles/global/mediaQueries';
import PortableText from '../../components/portableText';

const Grid = styled('section')`
  display: grid;
  grid-template-columns: 1fr 1fr;

  .container-title {
    position: relative;
  }

  ${mediaQueries.mobile} {
    grid-template-columns: 1fr;
  }
`;

const ColLeft = styled(motion.div)`

    display: flex;
    align-items: center;
 
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
    background-color: ${props => theme.colors.primary};
  }
`;

const Intro = styled(motion.div)`
  font-size: 24px;
  line-height: 30px;
  font-family: ${theme.fonts.light};
  margin-top: 351px;
  ${mediaQueries.mobile} {
    margin-top: 0;
  }
`;

const parent = {
  initial : {y: 30, opacity: 0},
  
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1, ease: [0.6, 0.05, -0.01, 0.9],
      staggerChilren: 0.2,
    }
  }
}

const child = {
  initial : {y: 30, opacity: 0},
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      ease: [0.5, 0.05, -0.01, 0.9]
    }
  }
}

const Banner = ({ h1, intro, image, alt }) => {
  return (
    <Grid>
      <ColLeft variants={parent} initial='initial' animate='animate'>
        <div>
          <div variants={child} className="container-title">
            <Title>{h1}</Title>
          </div>
          <Intro variants={child}>
            <PortableText blocks={intro} />
          </Intro>
        </div>
      </ColLeft>
      <div>
        <GatsbyImage image={image} alt={alt} />
      </div>
    </Grid>
  );
};

export default Banner;
