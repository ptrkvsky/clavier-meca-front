require('dotenv').config({
  path: `.env.${process.env.NODE_ENV || 'development'}`,
});
const amazonPaapi = require('amazon-paapi');

exports.createPages = async ({ graphql, actions }) => {
  // Redirect
  const { createRedirect } = actions;
  createRedirect({
    fromPath: '/claviers-etanches',
    toPath: '/claviers-etanches/',
    isPermanent: true,
  });

  const commonParameters = {
    AccessKey: process.env.GATSBY_AMAZON_ACCESS,
    SecretKey: process.env.GATSBY_AMAZON_SECRET,
    PartnerTag: 'clavier07-21', // yourtag-20
    PartnerType: 'Associates', // Optional. Default value is Associates.
    Marketplace: 'www.amazon.fr', // Optional. Default value is US.
  };

  /** Promise */
  const { createPage } = actions;

  const authorTemplate = require.resolve('./src/templates/Author.jsx');
  const postTemplate = require.resolve('./src/templates/Post.jsx');
  const categoryTemplate = require.resolve('./src/templates/Category.jsx');

  const result = await graphql(`
    {
      allSanityPost(filter: { slug: { current: { ne: null } } }) {
        nodes {
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
      allSanityAuthor {
        nodes {
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

  // Authors
  const authors = result.data.allSanityAuthor.nodes || [];

  // Category
  const categorySet = new Set();
  const posts = result.data.allSanityPost.nodes || [];

  // Keyboards
  const asinKeyboardsSet = new Set();
  const keyboards = result.data.allSanityKeyboard.nodes || [];

  // Products
  const asinProductsSet = new Set();
  const products = result.data.allSanityProduct.nodes || [];

  // Loop over all products
  products.forEach((node) => {
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
    requestParametersProducts,
  );

  // Loop over all products
  keyboards.forEach((node) => {
    // addAsin to set
    if (node.asin) {
      asinKeyboardsSet.add(node.asin);
    }
  });

  // Keyboards Amazon
  const asinKeyboardsList = Array.from(asinKeyboardsSet);
  const asinKeyboardsListFiltered = asinKeyboardsList.filter((el) => el != null);
  const chunk = 9;
  const arrayRequest = []; // array for slice results
  // Slice tab of keyboards into chunk of 9 elements
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

  // Request amazon API and build array for every chunk of 9 elements
  const keyboardsAmazon = [];
  for (let i = 0; i < arrayRequest.length; i += 1) {
    const resultApi = await amazonPaapi.GetItems(
      commonParameters,
      arrayRequest[i],
    );
    keyboardsAmazon.push(resultApi);
  }

  // Merge arrays from every amazon request
  const keyboardsAmazonMerged = [];
  keyboardsAmazon.forEach((element) => {
    element.ItemsResult.Items.forEach((el) => {
      keyboardsAmazonMerged.push(el);
    });
  });

  // Build pages for every posts
  posts.forEach((post) => {
    // Get categories
    if (post.categories[0].slug.current) {
      post.categories.forEach((cat) => {
        categorySet.add(cat.slug.current);
      });
    }
    // Create pages and pass products and keyboards as context
    const path = `/${post.slug.current}`;
    createPage({
      path,
      component: postTemplate,
      context: {
        slug: post.slug.current,
        productsAmazon,
        keyboardsAmazon: keyboardsAmazonMerged,
      },
    });
  });

  // Build pages for every category
  const categoryList = Array.from(categorySet);

  categoryList.forEach((category) => {
    createPage({
      path: `/${category}`,
      component: categoryTemplate,
      context: {
        categorySlug: category,
      },
    });
  });

  // Build pages for every author
  authors.forEach((author) => {
    createPage({
      path: `/auteur/${author.slug.current}`,
      component: authorTemplate,
      context: {
        authorSlug: author.slug.current,
      },
    });
  });
};
