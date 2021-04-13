import { Container, CssBaseline } from '@material-ui/core';
import { graphql, useStaticQuery } from 'gatsby';
import * as React from 'react';
import { PropsWithChildren } from 'react';
import { Header } from '../header';

interface ILayoutProps {}

export const Layout = (props: PropsWithChildren<ILayoutProps>) => {
    const { children } = props;

    const data = useStaticQuery(graphql`
        query SiteTitleQuery {
            site {
                siteMetadata {
                    title
                    author
                }
            }
        }
    `);

    return (
        <>
            <CssBaseline />
            <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
            <main>
                <Container>{children}</Container>
            </main>
        </>
    );
};
