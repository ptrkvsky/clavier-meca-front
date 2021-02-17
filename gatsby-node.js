exports.createPages = async ({ graphql, actions }) => {
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
    }
  `);
  if (result.errors) {
    throw result.errors;
  }

  const categorySet = new Set();
  const posts = result.data.allSanityPost.edges || [];

  posts.forEach((edge, index) => {
    // Get categories
    if (edge.node.categories[0].slug.current) {
      edge.node.categories.forEach(cat => {
        console.info(cat.slug.current);
        categorySet.add(cat.slug.current);
      });
    }

    const path = `/${edge.node.slug.current}`;
    createPage({
      path,
      component: postTemplate,
      context: { slug: edge.node.slug.current },
    });
  });

  const categoryList = Array.from(categorySet);
  console.log(categoryList);

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
