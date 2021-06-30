import React from 'react';
import parse from 'html-react-parser';
import { Page } from '../components/Page/Page';
import { Layout } from '../components/Layout/Layout';
import { graphql } from 'gatsby';

const pageTemplate = ({ data: { page } }) => {
    const title = String(page.title);
    const content = parse(page.content);

    return (
        <Layout>
        <Page title={title} body={content} />
        </Layout>
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