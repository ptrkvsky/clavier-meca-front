require('dotenv').config({
  path: `.env.${process.env.NODE_ENV || 'development'}`,
});

exports.createPages = async ({ graphql, actions }) => {
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
