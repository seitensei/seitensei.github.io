import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import clsx from 'clsx';
import React from 'react';

import { DRAWER_WIDTH } from '../../shared/contants';
import { GlobalStateContext } from '../globalStateProvider/globalStateProvider';

const useStyles = makeStyles(theme => ({
    footer: {
        padding: theme.spacing(2),
        marginTop: 'auto',
        backgroundColor:
            theme.palette.type === 'light'
                ? theme.palette.grey[200]
                : theme.palette.grey[800],
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: 0,
    },
    footerShift: {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: DRAWER_WIDTH,
    },
}));

interface IFooterProps {
    copyright?: string;
}

export const Footer = (props: IFooterProps) => {
    const { copyright } = props;
    const classes = useStyles();
    return (
        <GlobalStateContext.Consumer>
            {context => (
                <footer
                    className={clsx(classes.footer, {
                        [classes.footerShift]: context.isDrawerOpen,
                    })}
                >
                    <Container>
                        <Grid container className={classes.footer}>
                            <Grid item xs={12}>
                                <IconButton
                                    aria-label="GitHub"
                                    href="https://github.com/seitensei/"
                                    target="_blank"
                                    rel="noopener"
                                >
                                    <GitHubIcon />
                                </IconButton>
                                <IconButton
                                    aria-label="LinkedIn"
                                    href="https://www.linkedin.com/in/nguyentt/"
                                    target="_blank"
                                    rel="noopener"
                                >
                                    <LinkedInIcon />
                                </IconButton>
                            </Grid>
                            <Grid item xs={12}>
                                {copyright || ''} &copy;{' '}
                                {new Date().getFullYear()}
                            </Grid>
                        </Grid>
                    </Container>
                </footer>
            )}
        </GlobalStateContext.Consumer>
    );
};
