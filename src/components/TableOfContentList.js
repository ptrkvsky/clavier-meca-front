import React from 'react';
import styled from '@emotion/styled';
import TableOfContentListItem from './TableOfContentListItem';

const Ul = styled('ul')`
  display: ${props => (props.tocIsVisible ? '' : 'none')};
`;

const TableOfContentList = ({ tableOfContent, tocIsVisible }) => {
  return (
    <Ul tocIsVisible={tocIsVisible}>
      {tableOfContent.map((tableOfContentItem, index) => (
        <TableOfContentListItem
          key={tableOfContentItem.value + index}
          item={tableOfContentItem}
        />
      ))}
    </Ul>
  );
};

export default TableOfContentList;
