import React from 'react';
import parse from 'html-react-parser';
import { Page } from '../components/Page/Page';
import { GatsbyLayout } from '../components/Layout/GatsbyLayout';
import { graphql } from 'gatsby';

const pageTemplate = ({ data: { page } }) => {
    const title = String(page.title);
    const content = parse(page.content);

    return (
        <GatsbyLayout>
        <Page title={title} body={content} />
        </GatsbyLayout>
    );
}

export const pageQuery = graphql`
    query PageQuery(
        $id: String!
    ) {
        page: wpPage(id: { eq: $id }) {
            id
            title
            content
        }
    }
`;

export default pageTemplate;