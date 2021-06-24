import * as React from 'react';
import { Link } from 'gatsby';
import { Layout } from '../components/Layout/Layout';

// styles
const pageStyles = {
    color: '#232129',
    padding: '96px',
    fontFamily: '-apple-system, Roboto, sans-serif, serif',
};
const headingStyles = {
    marginTop: 0,
    marginBottom: 64,
    maxWidth: 320,
};

const paragraphStyles = {
    marginBottom: 48,
};

// markup
const NotFoundPage = () => {
    return (
        <Layout>
            <div style={pageStyles}>
                <title>Not found</title>
                <h1 style={headingStyles}>Page not found</h1>
                <p style={paragraphStyles}>
                    Sorry{' '}
                    <span role="img" aria-label="Pensive emoji">
                        😔
                    </span>{' '}
                    we couldn’t find what you were looking for.
                    <br />
                    <Link to="/">Go home</Link>.
                </p>
            </div>
        </Layout>
    );
};

export default NotFoundPage;
