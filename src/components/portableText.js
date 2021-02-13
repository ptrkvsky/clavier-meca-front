import React from 'react';
import clientConfig from '../../client-config';
import BasePortableText from '@sanity/block-content-to-react';
import serializers from './serializers';

const PortableText = ({
  blocks,
  className,
  tableOfContent,
  setTableOfContent,
}) => {
  return (
    <BasePortableText
      blocks={blocks}
      serializers={serializers(tableOfContent, setTableOfContent)}
      {...clientConfig.sanity}
    />
  );
};

export default PortableText;
