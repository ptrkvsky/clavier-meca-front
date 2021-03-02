import React, { useState } from 'react';
import styled from '@emotion/styled';
import theme from '../styles/global/theme';
import mediaQueries from '../styles/global/mediaQueries';
import { BsLayoutTextSidebarReverse as Icon } from '@react-icons/all-files/bs/BsLayoutTextSidebarReverse';

import TableOfContentList from './TableOfContentList';

const TableOfContentStyled = styled('div')`
  padding: 40px;
  margin: 114px 0;
  font-size: 18px;

  list-style-type: none;
  line-height: 1.3;
  background: #000;
  color: #fff;

  ${mediaQueries.tabletLandscape} {
    margin: 68px 0;
  }

  .heading {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

const TableOfContent = ({ tableOfContent }) => {
  const [tocIsVisible, setTocIsVisible] = useState(false);

  const handleClick = () => {
    setTocIsVisible(!tocIsVisible);
  };

  return (
    <TableOfContentStyled>
      <div className="heading">
        <h2>Sommaire</h2>
        <Icon size={30} onClick={handleClick} />
      </div>
      <TableOfContentList
        tocIsVisible={tocIsVisible}
        tableOfContent={tableOfContent}
      />
    </TableOfContentStyled>
  );
};

export default TableOfContent;
