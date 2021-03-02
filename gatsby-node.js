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
      allSanityKeyboard {
        nodes {
          asin
        }
      }
    }
  `);
  if (result.errors) {
    throw result.errors;
  }

  // Category
  const categorySet = new Set();
  const posts = result.data.allSanityPost.edges || [];

  // Products
  const asinProductsSet = new Set();
  const products = result.data.allSanityProduct.nodes || [];

  // Loop over all products
  products.forEach(node => {
    // addAsin to set
    if (node.asin) {
      asinProductsSet.add(node.asin);
    }
  });
  const asinProductsList = Array.from(asinProductsSet);
  const requestParametersProducts = {
    ItemIds: asinProductsList,
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
    requestParametersProducts
  );

  // Keyboards
  const asinKeyboardsSet = new Set();
  const keyboards = result.data.allSanityKeyboard.nodes || [];

  // Loop over all products
  keyboards.forEach(node => {
    // addAsin to set
    if (node.asin) {
      asinKeyboardsSet.add(node.asin);
    }
  });

  // Keyboards Amazon
  const asinKeyboardsList = Array.from(asinKeyboardsSet);
  const asinKeyboardsListFiltered = asinKeyboardsList.filter(el => el != null);
  const chunk = 9;
  const arrayRequest = []; // array for slice results

  for (let i = 0; i < asinKeyboardsListFiltered.length; i += chunk) {
    const tabSliced = asinKeyboardsListFiltered.slice(i, i + chunk);

    const requestParametersKeyboards = {
      ItemIds: tabSliced,
      ItemIdType: 'ASIN',
      Condition: 'New',
      Resources: [
        'ItemInfo.ByLineInfo',
        'ItemInfo.ContentInfo',
        'ItemInfo.Features',
        'ItemInfo.ProductInfo',
        'ItemInfo.TechnicalInfo',
        'ItemInfo.Title',
        'ItemInfo.TradeInInfo',
        'Offers.Listings.Availability.Message',
        'Offers.Listings.Price',
        'Offers.Listings.DeliveryInfo.IsPrimeEligible',
      ],
    };
    arrayRequest.push(requestParametersKeyboards);
  }
  const keyboardsAmazon = [];
  for (let i = 0; i < arrayRequest.length; i += 1) {
    const resultApi = await amazonPaapi.GetItems(
      commonParameters,
      arrayRequest[i]
    );
    keyboardsAmazon.push(resultApi);
  }
  const finalArray = keyboardsAmazon.map(
    objectsAmazon => objectsAmazon.ItemsResult.Items
  );

  // Merge arrays for every amazon request
  const keyboardsAmazonMerged = [];
  keyboardsAmazon.forEach(element => {
    console.info(element.ItemsResult.Items);
    element.ItemsResult.Items.forEach(el => {
      keyboardsAmazonMerged.push(el);
    });
  });

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
        keyboardsAmazon: keyboardsAmazonMerged,
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
