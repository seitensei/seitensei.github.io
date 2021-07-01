import { GatsbyNode, graphql } from 'gatsby';
import React from 'react';
import { Post } from "../components/Post/Post";
import parse from 'html-react-parser';
import { GatsbyLayout } from '../components/Layout/GatsbyLayout';

const postTemplate = ({ data: { previous, next, post } }) => {
    const title = String(post.title);
    const date = new Date(post.date);
    const content = parse(post.content);

    const featuredImage = {
        url: post.featuredImage?.node.localFile.publicURL,
        altText: post.featuredImage?.node.altText
    };

    return (
        <GatsbyLayout>
        <Post featuredImage={featuredImage} title={title} date={date} body={content} />
        </GatsbyLayout>
    );
}

export default postTemplate;

export const pageQuery = graphql`
query PostQuery(
    $id: String!
    $previousPostId: String
    $nextPostId: String
) {
    post: wpPost(id: { eq: $id }) {
        id
        excerpt
        content
        title
        date
        featuredImage {
            node {
                localFile {
                    publicURL
                }
                altText
            }
        }
    }

    previous: wpPost(id: { eq: $previousPostId }) {
        slug
        title
    }

    next: wpPost(id: { eq: $nextPostId }) {
        slug
        title
    }
}
`;