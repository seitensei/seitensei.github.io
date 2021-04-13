import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import { graphql, useStaticQuery } from 'gatsby';
import * as React from 'react';
import { PropsWithChildren } from 'react';
import { Footer } from '../footer';
import { Header } from '../header';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
    },
    main: {
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(2),
    },
}));

interface ILayoutProps {}

export const Layout = (props: PropsWithChildren<ILayoutProps>) => {
    const { children } = props;

    const classes = useStyles();

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
        <div className={classes.root}>
            <CssBaseline />
            <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
            <Container component="main" className={classes.main}>
                {children}
            </Container>
            <Footer copyright={data.site.siteMetadata?.author || `Copyright`} />
        </div>
    );
};
