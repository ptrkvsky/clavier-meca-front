import PropTypes from 'prop-types';
import React from 'react';
import PortableText from './portableText';
import BodySectionStyled from '../styles/components/BodySection';

const BodySection = ({ _rawBodyTextt, tableOfContent, setTableOfContent }) => (
  <BodySectionStyled className="numberh2">
    <PortableText
      blocks={_rawBodyTextt}
      tableOfContent={tableOfContent}
      setTableOfContent={setTableOfContent}
    />
  </BodySectionStyled>
);

BodySection.propTypes = {
  _rawBodyTextt: PropTypes.array.isRequired,
  setTableOfContent: PropTypes.func.isRequired,
  tableOfContent: PropTypes.object.isRequired,
};

export default BodySection;
