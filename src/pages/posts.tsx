import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { graphql } from 'gatsby';
import { GatsbyLink } from 'gatsby-theme-material-ui';
import React from 'react';

import { Layout } from '../components/layout';

const PostsPage = ({ data }) => {
    const { allMarkdownRemark } = data;

    return (
        <Layout>
            <List>
            {allMarkdownRemark.edges.map(({ node }) => (
                <ListItem component={GatsbyLink} to={node.fields.slug}>
                    <ListItemText primary={node.frontmatter.title} secondary={node.frontmatter.date}/>
                </ListItem>
            ))}
            </List>
        </Layout>
    );
};

export const query = graphql`
    query {
        allMarkdownRemark(
            sort: { fields: [frontmatter___date], order: DESC }
        ) {
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
                }
            }
        }
    }
`;

export default PostsPage;
