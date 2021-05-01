const path = require('path');
const { createFilePath } = require('gatsby-source-filesystem');
const { PostAddSharp } = require('@material-ui/icons');

exports.createPages = async ({ graphql, actions, reporter}) => {
    const { createPage } = actions;

    // post template
    const postTemplate = path.resolve(`./src/templates/post.tsx`);

    // get markdown posts
    const result = await graphql(
        `
        {
            allMarkdownRemark(
                sort: { fields: [frontmatter___date], order: ASC }
                limit: 1000
            ) {
                nodes {
                    id
                    fields {
                        slug
                    }
                }
            }
        }
        `
    );

    if (result.error) {
        reporter.panicOnBuild(
            `Error loading posts`,
            result.errors
        );
        return;
    }

    const posts = result.data.allMarkdownRemark.nodes;

    if (posts.length > 0) {
        posts.forEach((post) => {
            createPage({
                path: post.fields.slug,
                component: postTemplate,
                context: {
                    id: post.id
                },
            });
        });
    }
};

exports.onCreateNode = ({ node, getNode, actions }) => {
    const { createNodeField } = actions;

    if (node.internal.type === `MarkdownRemark`) {
        const value = createFilePath({ node, getNode });

        createNodeField({
            node,
            name: `slug`,
            value,
        });
    }
};

exports.createSchemaCustomization = ({actions}) => {
    const { createTypes } = actions;

    createTypes(`
        type MarkdownRemark implements Node {
            frontmatter: Frontmatter
            fields: Fields
        }
        
        type Frontmatter {
            title: String
            description: String
            date: Date @dateformat
        }

        type Fields {
            slug: String
        }
    `);
};