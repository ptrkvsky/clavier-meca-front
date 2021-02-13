import PropTypes from 'prop-types';
import React from 'react';
import SwitchDetail from './SwitchDetail';
import styled from '@emotion/styled';

const DlStyle = styled('dl')``;

const SwitchDetails = ({ switchItem }) => {
  return (
    <DlStyle>
      <SwitchDetail label={'TYPE'} value={switchItem.type} />
      <br />
      {switchItem?.distanceDactivation && (
        <>
          <SwitchDetail
            label={'DISTANCE D’ACTIVATION'}
            value={switchItem.distanceDactivation}
            unite={'mm'}
          />
          <br />
        </>
      )}
      {switchItem?.forceDactionnement && (
        <>
          <SwitchDetail
            label={`Force d'actionnement`}
            value={switchItem.forceDactionnement}
            unite={'g'}
          />
          <br />
        </>
      )}
      {switchItem.distanceTotale && (
        <>
          <SwitchDetail
            label={'Distance de voyage'}
            value={switchItem.distanceTotale}
            unite="mm"
          />
          <br />
        </>
      )}

      {switchItem?.forceMaximale && (
        <>
          <SwitchDetail
            label={'Force maximale'}
            value={switchItem.forceMaximale}
            unite={'g'}
          />
          <br />
        </>
      )}
    </DlStyle>
  );
};

SwitchDetails.propTypes = {
  switchItem: PropTypes.shape({
    distanceDactivation: PropTypes.number,
    forceDactionnement: PropTypes.number,
    forceMaximale: PropTypes.number,
  }).isRequired,
};

export default SwitchDetails;
