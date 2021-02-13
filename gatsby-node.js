exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const result = await graphql(`
    {
      allSanityPost(filter: { slug: { current: { ne: null } } }) {
        edges {
          node {
            slug {
              current
            }
          }
        }
      }
    }
  `);
  if (result.errors) {
    throw result.errors;
  }
  const posts = result.data.allSanityPost.edges || [];
  posts.forEach((edge, index) => {
    const path = `/${edge.node.slug.current}`;
    createPage({
      path,
      component: require.resolve('./src/templates/Post.js'),
      context: { slug: edge.node.slug.current },
    });
  });
};
