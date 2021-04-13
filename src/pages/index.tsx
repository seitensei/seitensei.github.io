import * as React from 'react';
import { graphql } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import { Layout } from '../components/layout';
import { Link } from 'gatsby-theme-material-ui';
import { Post } from '../components/post';

const IndexPage = ({ data }) => {
    const { allMarkdownRemark } = data;

    return (
        <Layout>
            {allMarkdownRemark.edges.map(({ node }) => (
                <>
                    <Post
                        key={node.id}
                        title={node.frontmatter.title}
                        datetime={node.frontmatter.date}
                        content={node.excerpt}
                        link={'posts' + node.fields.slug}
                        excerpt
                    />
                </>
            ))}
        </Layout>
    );
};

export const query = graphql`
    query {
        allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
            totalCount
            edges {
                node {
                    id
                    frontmatter {
                        title
                        date(formatString: "DD MMMM, YYYY")
                    }
                    fields {
                        slug
                    }
                    excerpt(pruneLength: 500)
                }
            }
        }
    }
`;

export default IndexPage;
