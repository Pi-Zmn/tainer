'use client'

import * as React from 'react';
import Box from '@mui/material/Box';
import Link from 'next/link'
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import TextSnippetRoundedIcon from '@mui/icons-material/TextSnippetRounded';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import CollectionsRoundedIcon from '@mui/icons-material/CollectionsRounded';
import CalendarMonthRoundedIcon from '@mui/icons-material/CalendarMonthRounded';
import styles from './Drawer.module.scss';

export default function TemporaryDrawer() {
    const [open, setOpen] = React.useState(false);

    const navigation = [
        {link: '/', icon: <HomeRoundedIcon />, name: "Home"},
        {link: '/Gallery', icon: <CollectionsRoundedIcon />, name: "Gallery"},
        {link: '/Storytime', icon: <TextSnippetRoundedIcon />, name: "Storytime"},
        {link: '/Calender', icon: <CalendarMonthRoundedIcon />, name: "Kalender"}
    ]

    const toggleDrawer =
        (open: boolean) =>
            (event: React.KeyboardEvent | React.MouseEvent) => {
                if (
                    event.type === 'keydown' &&
                    ((event as React.KeyboardEvent).key === 'Tab' ||
                        (event as React.KeyboardEvent).key === 'Shift')
                ) {
                    return;
                }

                setOpen(open);
            };

    const list = () => (
        <Box sx={{ width: 250 , bgcolor: 'background.paper' }}>
            <nav aria-label="main mailbox folders">
                <List>
                {navigation.map((item) => {
                    return (
                        <Link href={item.link} key={`nav-link-${item.name}`} className={styles.link}>
                            <ListItem disablePadding>
                                <ListItemButton>
                                    <ListItemIcon>
                                        {item.icon}
                                    </ListItemIcon>
                                    <ListItemText primary={item.name} />
                                </ListItemButton>
                            </ListItem>
                        </Link>
                    )
                })}
                </List>
            </nav>
            <Divider />
        </Box>
    );

    return (
        <div>
            <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
                onClick={toggleDrawer(true)}
            >
                <MenuIcon />
            </IconButton>
            <Drawer
                anchor="left"
                open={open}
                onClose={toggleDrawer( false)}
            >
                {list()}
            </Drawer>
        </div>
    );
}