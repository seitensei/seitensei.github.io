import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import { GatsbyLink } from 'gatsby-theme-material-ui';
import HomeIcon from '@material-ui/icons/Home';
import ListAltIcon from '@material-ui/icons/ListAlt';
import AssignmentIcon from '@material-ui/icons/Assignment';
import FaceIcon from '@material-ui/icons/Face';
import React, { ReactNode } from 'react';
import ListItemText from '@material-ui/core/ListItemText';

interface ILinkListLinks {
    path: string;
    title: string;
    icon: ReactNode;
}

const navLinks: Array<ILinkListLinks> = [
    {
        path: '/',
        title: 'Home',
        icon: <HomeIcon />
    },
    {
        path: '/projects',
        title: 'Projects',
        icon: <AssignmentIcon />
    },
    {
        path: '/posts',
        title: 'Archive',
        icon: <ListAltIcon />
    },
    {
        path: '/about',
        title: 'About',
        icon: <FaceIcon />
    },
];

const LinkList = () => {
    return (
        <List component="nav">
            {navLinks.map(navLink => {
                return (
                    <ListItem key={navLink.title} button component={GatsbyLink} to={navLink.path}>
                        <ListItemIcon>
                            {navLink.icon}
                        </ListItemIcon>
                        <ListItemText primary={navLink.title} />
                    </ListItem>
                );
            })}
        </List>
    );
}

export default LinkList;
