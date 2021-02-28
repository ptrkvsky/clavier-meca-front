require('dotenv').config({
  path: `.env.${process.env.NODE_ENV || 'development'}`,
});
const amazonPaapi = require('amazon-paapi');

exports.createPages = async ({ graphql, actions }) => {
  const commonParameters = {
    AccessKey: process.env.GATSBY_AMAZON_ACCESS,
    SecretKey: process.env.GATSBY_AMAZON_SECRET,
    PartnerTag: 'clavier07-21', // yourtag-20
    PartnerType: 'Associates', // Optional. Default value is Associates.
    Marketplace: 'www.amazon.fr', // Optional. Default value is US.
  };

  /** Promise */

  const { createPage } = actions;

  const postTemplate = require.resolve('./src/templates/Post.js');
  const categoryTemplate = require.resolve('./src/templates/Category.js');

  const result = await graphql(`
    {
      allSanityPost(filter: { slug: { current: { ne: null } } }) {
        edges {
          node {
            slug {
              current
            }
            categories {
              slug {
                current
              }
            }
          }
        }
      }
      allSanityProduct {
        nodes {
          asin
          slug {
            current
          }
        }
      }
    }
  `);
  if (result.errors) {
    throw result.errors;
  }

  const categorySet = new Set();
  const posts = result.data.allSanityPost.edges || [];
  const asinSet = new Set();
  const products = result.data.allSanityProduct.nodes || [];

  // Loop over all products
  products.forEach(node => {
    // addAsin to set
    if (node.asin) {
      asinSet.add(node.asin);
    }
  });
  const asinList = Array.from(asinSet);
  const requestParameters = {
    ItemIds: asinList,
    ItemIdType: 'ASIN',
    Condition: 'New',
    Resources: [
      'ItemInfo.ByLineInfo',
      'ItemInfo.ContentInfo',
      'ItemInfo.ContentRating',
      'ItemInfo.Classifications',
      'ItemInfo.ExternalIds',
      'ItemInfo.Features',
      'ItemInfo.ManufactureInfo',
      'ItemInfo.ProductInfo',
      'ItemInfo.TechnicalInfo',
      'ItemInfo.Title',
      'ItemInfo.TradeInInfo',
      'Offers.Listings.Availability.Message',
      'Offers.Listings.Price',
      'Offers.Listings.DeliveryInfo.IsPrimeEligible',
    ],
  };
  const productsAmazon = await amazonPaapi.GetItems(
    commonParameters,
    requestParameters
  );

  posts.forEach((edge, index) => {
    // Get categories
    if (edge.node.categories[0].slug.current) {
      edge.node.categories.forEach(cat => {
        categorySet.add(cat.slug.current);
      });
    }

    const path = `/${edge.node.slug.current}`;
    createPage({
      path,
      component: postTemplate,
      context: {
        slug: edge.node.slug.current,
        productsAmazon,
      },
    });
  });

  const categoryList = Array.from(categorySet);

  categoryList.forEach(category => {
    createPage({
      path: `/${category}`,
      component: categoryTemplate,
      context: {
        categorySlug: category,
      },
    });
  });
};
