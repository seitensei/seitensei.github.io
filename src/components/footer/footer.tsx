import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import * as React from 'react';

const useStyles = makeStyles(theme => ({
    footer: {
        padding: theme.spacing(2),
        marginTop: 'auto',
        backgroundColor:
            theme.palette.type === 'light'
                ? theme.palette.grey[200]
                : theme.palette.grey[800],
    },
}));

interface IFooterProps {
    copyright?: string;
}

export const Footer = (props: IFooterProps) => {
    const { copyright } = props;
    const classes = useStyles();
    return (
        <footer className={classes.footer}>
            <Container>
                <Grid container className={classes.footer}>
                    <Grid item xs={12}></Grid>
                    <Grid item xs={12}>
                        {copyright || ''} &copy; {new Date().getFullYear()}
                    </Grid>
                </Grid>
            </Container>
        </footer>
    );
};
