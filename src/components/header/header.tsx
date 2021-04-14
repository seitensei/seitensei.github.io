import { ListItem } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import AssignmentIcon from '@material-ui/icons/Assignment';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import FaceIcon from '@material-ui/icons/Face';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import HomeIcon from '@material-ui/icons/Home';
import MenuIcon from '@material-ui/icons/Menu';
import MenuOpenIcon from '@material-ui/icons/MenuOpen';
import ListAltIcon from '@material-ui/icons/ListAlt';
import clsx from 'clsx';
import { GatsbyLink, Link } from 'gatsby-theme-material-ui';
import React from 'react';
import { PropsWithChildren } from 'react';

import { DRAWER_WIDTH } from '../../shared/contants';
import { GlobalStateContext } from '../globalStateProvider/globalStateProvider';

const useStyles = makeStyles(theme => ({
    hide: {
        display: 'none',
    },
    appBar: {},
    appBarShift: {
        width: `calc(100% - ${DRAWER_WIDTH}px)`,
        marginLeft: DRAWER_WIDTH,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawer: {
        width: DRAWER_WIDTH,
        flexShrink: 0,
    },
    drawerPaper: {
        width: DRAWER_WIDTH,
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
    },
}));

interface IHeaderProps {
    siteTitle: string;
}

export const Header = (props: PropsWithChildren<IHeaderProps>) => {
    const { siteTitle } = props;
    const classes = useStyles();
    return (
        <GlobalStateContext.Consumer>
            {context => (
                <>
                    <AppBar
                        position="static"
                        className={clsx(classes.appBar, {
                            [classes.appBarShift]: context.isDrawerOpen,
                        })}
                    >
                        <Toolbar>
                            <IconButton
                                color="inherit"
                                aria-label="Open Drawer"
                                onClick={context.toggleDrawer}
                                edge="start"
                                className={clsx({
                                    [classes.hide]: context.isDrawerOpen,
                                })}
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
                        className={classes.drawer}
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                    >
                        <div className={classes.drawerHeader}>
                            <IconButton
                                color="inherit"
                                aria-label="Close Drawer"
                                onClick={context.toggleDrawer}
                            >
                                <MenuOpenIcon />
                            </IconButton>
                        </div>
                        <Divider />
                        {/* TODO: Move Nav List out into its own component */}
                        <List component="nav">
                            <ListItem button component={GatsbyLink} to={'/'}>
                                <ListItemIcon>
                                    <HomeIcon />
                                </ListItemIcon>
                                <ListItemText primary={'Home'} />
                            </ListItem>
                            <ListItem
                                button
                                component={GatsbyLink}
                                to={'/projects'}
                            >
                                <ListItemIcon>
                                    <AssignmentIcon />
                                </ListItemIcon>
                                <ListItemText primary={'Projects'} />
                            </ListItem>
                            <ListItem
                                button
                                component={GatsbyLink}
                                to={'/posts'}
                            >
                                <ListItemIcon>
                                    <ListAltIcon />
                                </ListItemIcon>
                                <ListItemText primary={'Archive'} />
                            </ListItem>
                            <ListItem
                                button
                                component={GatsbyLink}
                                to={'/about'}
                            >
                                <ListItemIcon>
                                    <FaceIcon />
                                </ListItemIcon>
                                <ListItemText primary={'About'} />
                            </ListItem>
                        </List>
                    </Drawer>
                </>
            )}
        </GlobalStateContext.Consumer>
    );
};
