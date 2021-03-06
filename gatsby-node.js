const { graphql } = require("gatsby");
const chunk = require(`lodash/chunk`);
const path = require(`path`);

exports.onPostBuild = ({ reporter }) => {
  reporter.info(`Site built!`);
};

exports.createPages = async (gatsbyUtilities) => {
  const posts = await getPosts(gatsbyUtilities);
  const pages = await getPages(gatsbyUtilities);

  if (posts.length) {
    await createSinglePosts({ posts, gatsbyUtilities });
    await createPosts({ posts, gatsbyUtilities });
  }

  if (pages.length) {
    await createSinglePages({ pages, gatsbyUtilities });
  }
};

const createSinglePosts = async ({ posts, gatsbyUtilities }) => {
  Promise.all(
    posts.map(({ previous, post, next }) =>
      gatsbyUtilities.actions.createPage({
        path: `/post/${post.slug}/`,
        component: path.resolve(`./src/templates/Post.tsx`),
        context: {
          id: post.id,
          previousPostId: previous ? previous.id : null,
          nextPostId: next ? next.id : null,
        },
      })
    )
  );
};

const createPosts = async ({ posts, gatsbyUtilities }) => {
  const graphqlResult = await gatsbyUtilities.graphql(`
  {
    wp {
      readingSettings {
        postsPerPage
      }
    }
  }
  `);

  const { postsPerPage } = graphqlResult.data.wp.readingSettings;
  const postsPageChunk = chunk(posts, postsPerPage);
  const totalPages = postsPageChunk.length;

  return Promise.all(
    postsPageChunk.map(async (_posts, index) => {
      const pageNumber = index + 1;

      const getPagePath = (page) => {
        if (page > 0 && page <= totalPages) {
          return page === 1 ? `/posts/` : `/posts/${page}`;
        }

        return null;
      };

      await gatsbyUtilities.actions.createPage({
        path: getPagePath(pageNumber),
        component: path.resolve(`./src/templates/Posts.tsx`),
        context: {
          offset: index * postsPerPage,
          postsPerPage,
          nextPagePath: getPagePath(pageNumber + 1),
          previousPagePath: getPagePath(pageNumber - 1),
        },
      });
    })
  );
};

const getPosts = async ({ graphql, reporter }) => {
  const graphqlResult = await graphql(`
    query GetPosts {
      allWpPost(sort: { fields: [date], order: DESC }) {
        edges {
          previous {
            id
          }
          post: node {
            id
            slug
          }
          next {
            id
          }
        }
      }
    }
  `);

  if (graphqlResult.errors) {
    reporter.panicOnBuild(
      `There was an error querying posts`,
      graphqlResult.errors
    );
    return;
  }

  return graphqlResult.data.allWpPost.edges;
};

const createSinglePages = async ({ pages, gatsbyUtilities }) => {
  Promise.all(
    pages.map(({ page }) => 
      gatsbyUtilities.actions.createPage({
        path: `/page/${page.slug}/`,
        component: path.resolve(`./src/templates/Page.tsx`),
        context: {
          id: page.id
        },
      })
    )
  );
};

const getPages = async ({ graphql, reporter }) => {
  const graphqlResult = await graphql(`
    query GetPages {
      allWpPage {
        edges {
          page: node {
            id
            title
            slug
          }
        }
      }
    }
  `);

  if (graphqlResult.errors) {
    reporter.panicOnBuild(
      `There was an error querying pages`,
      graphqlResult.errors
    );
    return;
  }

  return graphqlResult.data.allWpPage.edges;
};
