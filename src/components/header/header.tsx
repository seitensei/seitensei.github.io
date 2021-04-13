import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Link } from 'gatsby-theme-material-ui';
import * as React from 'react';
import { PropsWithChildren } from 'react';

interface IHeaderProps {
    siteTitle: string;
}

export const Header = (props: PropsWithChildren<IHeaderProps>) => {
    const { siteTitle } = props;
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography
                    component="h2"
                    variant="h5"
                    color="inherit"
                    align="center"
                    noWrap
                >
                    <Link to="/" color="inherit">
                        {siteTitle}
                    </Link>
                </Typography>
            </Toolbar>
        </AppBar>
    );
};
