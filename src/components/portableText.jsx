/* eslint-disable react/jsx-props-no-spreading */
import PropTypes from 'prop-types';
import React from 'react';
import BasePortableText from '@sanity/block-content-to-react';
import clientConfig from '../../client-config';
import Serializers from './serializers';

const PortableText = ({ blocks, tableOfContent, setTableOfContent }) => (
  <BasePortableText
    blocks={blocks}
    serializers={Serializers(tableOfContent, setTableOfContent)}
    {...clientConfig.sanity}
  />
);

PortableText.defaultProps = {
  setTableOfContent: () => {},
  tableOfContent: [],
};

PortableText.propTypes = {
  blocks: PropTypes.array.isRequired,
  setTableOfContent: PropTypes.func,
  tableOfContent: PropTypes.array,
};

export default PortableText;
