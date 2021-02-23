import PropTypes from 'prop-types';
import React from 'react';
import wrong from '../../assets/images/wrong.svg';
import check from '../../assets/images/check.svg';
import PortableText from '../portableText';
import styled from '@emotion/styled';
import theme from '../../styles/global/theme';
import mediaQueries from '../../styles/global/mediaQueries';

const SectionProsCons = styled('div')`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
  border-top: 8px solid ${theme.colors.main};
  margin-top: 59px;
  padding-top: 12px;

  ${mediaQueries.mobile} {
    grid-template-columns: 1fr;
  }

  .title {
    display: inline-block;
    padding: 20px;
    font-size: 30px;
    font-family: 'Suisse-bold', 'Helvetica Neue', Helvetica, Arial, sans-serif;
    letter-spacing: -1px;
    background-color: ${theme.colors.border};
  }

  li {
    position: relative;
    margin-bottom: 8px;
    list-style-type: none;
    font-size: 0.9em;
    line-height: 1.25;

    :before {
      content: '';
      position: absolute;
      top: 5px;
      left: -23px;
      display: block;
      width: 12px;
      height: 12px;

      background-size: cover;
    }
  }

  .cons li:before {
    background-image: url(${wrong});
  }
  .pros li:before {
    background-image: url(${check});
  }
`;

const KeyboardProsCons = ({ pros, cons }) => {
  return (
    <SectionProsCons className="sections-pros-cons">
      <div className="pros">
        <p className="title">Nous avons aimé</p>
        <PortableText blocks={pros} />
      </div>
      <div className="cons">
        <p className="title">Nous avons moins aimé</p>
        <PortableText blocks={cons} />
      </div>
    </SectionProsCons>
  );
};

KeyboardProsCons.propTypes = {
  cons: PropTypes.array.isRequired,
  pros: PropTypes.array.isRequired,
};

export default KeyboardProsCons;
