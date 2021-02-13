import React, { useState } from 'react';
import styled from '@emotion/styled';
import theme from '../styles/global/theme';
// import { BsCardText as Icon } from 'react-icons/bs';
import { BsLayoutTextSidebarReverse as Icon } from '@react-icons/all-files/bs/BsLayoutTextSidebarReverse';

const TableOfContentStyled = styled('div')`
  padding: 40px;
  margin: 114px 0;
  font-size: 18px;

  list-style-type: none;
  line-height: 1.3;
  background: #000;
  color: #fff;

  ul {
    display: ${props => (props.tocIsVisible ? '' : 'none')};
  }

  .heading {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

const TableOfContent = ({ tableOfContent }) => {
  const tableOfContentMapped = tableOfContent.map(itemTable => {
    return <li>{itemTable.value}</li>;
  });

  const [tocIsVisible, setTocIsVisible] = useState(false);

  const handleClick = () => {
    setTocIsVisible(!tocIsVisible);
  };

  return (
    <TableOfContentStyled tocIsVisible={tocIsVisible}>
      <div className="heading">
        <h2>Sommaire</h2>
        <Icon size={30} onClick={handleClick} />
      </div>
      <ul>{tableOfContentMapped}</ul>
    </TableOfContentStyled>
  );
};

export default TableOfContent;
