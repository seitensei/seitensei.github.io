import { graphql } from 'gatsby';
import React from 'react';

import { Layout } from '../components/layout';
import { Post } from '../components/post';

const IndexPage = ({ data }) => {
    const { allMarkdownRemark } = data;

    return (
        <Layout>
            {allMarkdownRemark.edges.map(({ node }) => (
                    <Post
                        key={node.id}
                        title={node.frontmatter.title}
                        datetime={node.frontmatter.date}
                        content={node.excerpt}
                        link={node.fields.slug}
                        excerpt
                    />
            ))}
        </Layout>
    );
};

export const query = graphql`
    query {
        allMarkdownRemark(
            sort: { fields: [frontmatter___date], order: DESC }
            limit: 5
        ) {
            totalCount
            edges {
                node {
                    id
                    frontmatter {
                        title
                        date(formatString: "YYYY-MM-DD")
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
