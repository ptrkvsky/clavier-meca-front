import PropTypes from 'prop-types';
import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Nav from './index';

const NavContainer = ({ handleOnCursor }) => (
  <>
    <StaticQuery
      query={graphql`
          query {
            sanityMenu(slug: { current: { eq: "main-menu" } }) {
              id
              menuItem {
                menuItemName
                menuItemSlug {
                  current
                }
              }
            }
          }
        `}
      render={(data) => <Nav data={data} handleOnCursor={handleOnCursor} />}
    />
  </>
);

NavContainer.propTypes = {
  handleOnCursor: PropTypes.func.isRequired,
};

export default NavContainer;
