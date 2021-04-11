import { graphql, useStaticQuery } from 'gatsby';
import * as React from 'react';
import { PropsWithChildren } from 'react';
import { createUseStyles, ThemeProvider } from 'react-jss';
import { siteTheme } from '../../shared/themes';

import './layout.css';

const useStyles = createUseStyles(theme => ({
    header: {
        backgroundColor: theme.colorPrimary,
        color: theme.colorPrimaryText,
        fontSize: '2em',
        height: '5vh',
    },

    footer: {
        position: 'absolute',
        bottom: 0,
    }
}));

const Header = (props: PropsWithChildren<unknown>) => {
    const styles = useStyles();
    const { children } = props;
    return <header className={styles.header}>{children}</header>;
};

const Footer = (props: PropsWithChildren<unknown>) => {
    const styles = useStyles();
    const { children } = props;
    return <footer className={styles.footer}>{children}</footer>;
};

interface ILayoutProps {}

export const Layout = (props: PropsWithChildren<ILayoutProps>) => {
    const { children } = props;

    const data = useStaticQuery(graphql`
    query SiteTitleQuery {
        site {
            siteMetadata {
                title,
                author
            }
        }
    }
    `);

    return (
        <ThemeProvider theme={siteTheme}>
            <Header>{data.site.siteMetadata?.title || `Title`}</Header>
            <main>{children}</main>
            <Footer>&copy; {new Date().getFullYear()} {data.site.siteMetadata?.author || `Author`} </Footer>
        </ThemeProvider>
    );
};
