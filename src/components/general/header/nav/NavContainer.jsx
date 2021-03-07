import PropTypes from 'prop-types';
import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Nav from './index';

const NavContainer = () => (
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
      render={(data) => <Nav data={data} />}
    />
  </>
);

NavContainer.propTypes = {
  data: PropTypes.object.isRequired,
};

export default NavContainer;
