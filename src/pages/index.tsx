import * as React from 'react';
import { graphql } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import { Layout } from '../components/layout';
import { Link } from 'gatsby-theme-material-ui';

const IndexPage = ({ data }) => {
    const { allMarkdownRemark } = data;

    return (
        <Layout>
            {allMarkdownRemark.edges.map(({ node }) => (
                <div key={node.id}>
                    <Link to={'posts' + node.fields.slug} color="inherit">
                        <h2>{node.frontmatter.title} </h2>
                        <span>{node.frontmatter.date}</span>
                    </Link>
                    <article>
                        <p>{node.excerpt}</p>
                    </article>
                </div>
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
