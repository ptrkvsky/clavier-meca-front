import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'gatsby';
import theme from '../../../../styles/global/theme';
import styled from '@emotion/styled';

const NavItemStyle = styled('li')`
  position: relative;
  font-size: 16px;
  line-height: 20px;

  a {
    color: ${theme.colors.main};
  }

  .active {
    &::after {
      content: '';
      position: absolute;
      top: 24px;
      left: 1px;
      display: block;
      width: 29px;
      height: 4px;
      background-color: #000;
    }
  }
`;

const NavItem = ({ slug, name }) => (
  <NavItemStyle>
    <Link to={slug} activeClassName="active">
      {name}
    </Link>
  </NavItemStyle>
);

NavItem.propTypes = {
  name: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  active: PropTypes.bool,
};

NavItem.defaultProps = {
  active: false,
};

export default NavItem;
