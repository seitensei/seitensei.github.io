import React from 'react';
import parse from 'html-react-parser';
import { Page } from '../components/Page/Page';
import { Layout } from '../components/Layout/Layout';

const pageTemplate = ({ pageContext }) => {
    const title = String(pageContext.title);
    const content = parse(pageContext.content);

    return (
        <Layout>
        <Page title={title} body={content} />
        </Layout>
    );
}

export default pageTemplate;