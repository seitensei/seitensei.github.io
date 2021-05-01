import { graphql } from 'gatsby';
import React from 'react';

import { Layout } from '../components/layout';
import { Post } from '../components/post';

const PostContent = ({ html }) => {
    return <div dangerouslySetInnerHTML={{ __html: html }} />;
};

const PostTemplate = ({ data, location }) => {
    const { markdownRemark } = data;
    const { frontmatter, html } = markdownRemark;

    const postContent = PostContent({ html });

    return (
        <Layout>
            <Post
                title={frontmatter.title}
                datetime={frontmatter.date}
                content={postContent}
            />
        </Layout>
    );
};

export const postQuery = graphql`
    query(
        $id: String!
        ) {
        markdownRemark(id: { eq: $id }) {
            id
            html
            frontmatter {
                date(formatString: "YYYY-MM-DD")
                title
                description
            }
        }
    }
`;

export default PostTemplate;
