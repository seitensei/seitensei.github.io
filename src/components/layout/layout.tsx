import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import { PropsWithChildren } from 'react';

import { DRAWER_WIDTH } from '../../shared/contants';
import { Footer } from '../footer';
import { GlobalStateContext } from '../globalStateProvider/globalStateProvider';
import { Header } from '../header';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
    },
    main: {
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: 0,
    },
    mainShift: {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: DRAWER_WIDTH,
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
            <GlobalStateContext.Consumer>
                {context => (
                    <main
                        className={clsx(classes.main, {
                            [classes.mainShift]: context.isDrawerOpen,
                        })}
                    >
                        <Container>{children}</Container>
                    </main>
                )}
            </GlobalStateContext.Consumer>
            <Footer copyright={data.site.siteMetadata?.author || `Copyright`} />
        </div>
    );
};
