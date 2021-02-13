import PropTypes from 'prop-types';
import React from 'react';
import styled from '@emotion/styled';
import theme from '../../styles/global/theme';

const DtStyle = styled('dt')`
  display: inline-block;
  margin: 0;
  font-size: 24px;
  line-height: 39px;
  text-transform: uppercase;
  letter-spacing: 0;
  font-family: ${theme.fonts.title};
  &:after {
    content: ':';
  }
`;

const DdStyle = styled('dd')`
  display: inline-block;
  margin: 0;
  font-size: 24px;
  padding-left: 8px;

  .unite {
    font-size: 0.85em;
  }
`;

const SwitchDetail = ({ label, value, unite }) => {
  return (
    <>
      <DtStyle>{label}</DtStyle>
      <DdStyle>
        {value}
        {unite && <span className="unite">{unite}</span>}
      </DdStyle>
    </>
  );
};

SwitchDetail.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  unite: PropTypes.string,
};

SwitchDetail.defaultProps = {
  unite: undefined,
};

export default SwitchDetail;
