import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import theme from '../../../../styles/global/theme';
import styled from '@emotion/styled';
import NavItem from './NavItem';

const NavStyle = styled('nav')`
  ul {
    display: flex;
    flex-direction: row;
    list-style-type: none;
    gap: 42px;
  }
`;

const Nav = ({ data }) => {
  const menuItems = data.sanityMenu.menuItem;
  return (
    <NavStyle>
      <ul>
        {menuItems.map(menuItem => {
          return (
            <NavItem
              key={menuItem.menuItemSlug.current}
              name={menuItem.menuItemName}
              slug={menuItem.menuItemSlug.current}

            />
          );
        })}
      </ul>
    </NavStyle>
  );
};

export default Nav;
