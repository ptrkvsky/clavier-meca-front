import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Footer from './Footer';

const NavContainer = () => (
  <>
    <StaticQuery
      query={graphql`
          query {
            sanityPost(slug: { current: { eq: "mentions-legales" } }) {
              id
              slug {
                current
              }
              title
            }
          }
        `}
      render={(data) => <Footer data={data} />}
    />
  </>
);

export default NavContainer;
