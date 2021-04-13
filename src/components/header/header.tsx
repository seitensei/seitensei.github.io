import AppBar from '@material-ui/core/AppBar';
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'gatsby-theme-material-ui';
import React from 'react';
import { PropsWithChildren } from 'react';
import { GlobalStateContext } from '../globalStateProvider/globalStateProvider';

interface IHeaderProps {
    siteTitle: string;
}

export const Header = (props: PropsWithChildren<IHeaderProps>) => {
    const { siteTitle } = props;
    return (
            <GlobalStateContext.Consumer>
                {context => (
                    <>
                    <AppBar position="static">
                        <Toolbar>
                            <IconButton
                                color="inherit"
                                aria-label="Open Drawer"
                                onClick={context.toggleDrawer}
                                edge="start"
                                >
                                    <MenuIcon />
                            </IconButton>
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
                    <Drawer
                        variant="persistent"
                        anchor="left"
                        open={context.isDrawerOpen}
                        >
                            DRAWER?
                    </Drawer>
                    </>
                )}
            </GlobalStateContext.Consumer>
    );
};
