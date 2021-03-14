import PropTypes from 'prop-types';
import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Footer from './Footer';

const FooterContainer = ({ pathName }) => (
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
      render={(data) => <Footer pathName={pathName} data={data} />}
    />
  </>
);

FooterContainer.propTypes = {
  pathName: PropTypes.string.isRequired,
};

export default FooterContainer;
