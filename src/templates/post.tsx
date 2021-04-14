import { graphql } from 'gatsby';
import React from 'react';

import { Layout } from '../components/layout';
import { Post } from '../components/post';

const PostContent = ({ html }) => {
    return <div dangerouslySetInnerHTML={{ __html: html }} />;
};

const PostTemplate = ({ data }) => {
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
    query($slug: String!) {
        markdownRemark(fields: { slug: { eq: $slug } }) {
            html
            frontmatter {
                date(formatString: "YYYY-MM-DD")
                title
            }
        }
    }
`;

export default PostTemplate;
