import PropTypes from 'prop-types';
import React from 'react';
import styled from '@emotion/styled';
import TableOfContentListItem from './TableOfContentListItem';

const Ul = styled('ul')`
  display: ${(props) => (props.tocIsVisible ? '' : 'none')};
`;

const TableOfContentList = ({ tableOfContent, tocIsVisible }) => (
  <Ul tocIsVisible={tocIsVisible}>
    {tableOfContent.map((tableOfContentItem) => (
      <TableOfContentListItem
        key={tableOfContentItem.value}
        item={tableOfContentItem}
      />
    ))}
  </Ul>
);

TableOfContentList.propTypes = {
  tableOfContent: PropTypes.array.isRequired,
  tocIsVisible: PropTypes.bool.isRequired,
};

export default TableOfContentList;
