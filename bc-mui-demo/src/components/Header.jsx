/* eslint-disable react/prop-types */
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import MainLogo from '~/assets/MainLogo.svg';
import PlusIcon from '~/assets/PlusIcon.svg';
import { Container } from '@mui/material';

const drawerWidth = 240;
const navItems = ['Home', 'About', 'Service', 'Gallery'];

function Header(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            <Typography variant="h6" sx={{ my: 2 }}>
                <img src={MainLogo} alt="" style={{ width: '200px', cursor: 'pointer' }} />
            </Typography>
            <Divider />
            <List>
                {navItems.map((item) => (
                    <ListItem key={item} disablePadding>
                        <ListItemButton sx={{ textAlign: 'center' }}>
                            <ListItemText primary={item} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex', overflow: 'hidden' }}>
            <AppBar
                position="static"
                component="nav"
                sx={{
                    bgcolor: 'transparent',
                    boxShadow: 'none',
                    overflow: 'hidden',
                    width: '1188px',
                    margin: '0 auto',
                    '.MuiToolbar-root': {
                        width: '1188px',
                        marginTop: '45px',
                    },
                }}
            >
                <Container disableGutters maxWidth={false}>
                    <Toolbar>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="start"
                            onClick={handleDrawerToggle}
                            sx={{
                                ml: 2,
                                display: { md: 'none' },
                                border: '1px solid #FF64AE',
                                borderRadius: '4px',
                                overflow: 'hidden',
                            }}
                        >
                            <MenuIcon fontSize="large" sx={{ color: '#FF64AE' }} />
                        </IconButton>
                        <Typography
                            variant="h6"
                            component="div"
                            sx={{ flexGrow: 1, display: { xs: 'none', md: 'block' }, width: '258px', height: '63px' }}
                        >
                            <img src={MainLogo} alt="" style={{ width: '258px', height: '63px', cursor: 'pointer' }} />
                        </Typography>
                        <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: '45px' }}>
                            {navItems.map((item, index) => (
                                <Box key={index}>
                                    {index === 0 ? (
                                        <Button
                                            sx={{
                                                color: '#414880',
                                                fontWeight: '600',
                                            }}
                                        >
                                            {item} <img src={PlusIcon} alt="" />
                                        </Button>
                                    ) : (
                                        <Button key={item} sx={{ color: '#8B8B8B' }}>
                                            {item}
                                        </Button>
                                    )}
                                </Box>
                            ))}
                        </Box>
                        <Button
                            sx={{
                                bgcolor: '#FF64AE',
                                color: 'white',
                                p: '14px 41px',
                                ':hover': { bgcolor: ' #e74d96' },
                                ml: '140px',
                                display: { xs: 'none', md: 'flex' },
                            }}
                        >
                            Contact
                        </Button>
                    </Toolbar>
                </Container>
            </AppBar>
            <nav>
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true,
                    }}
                    sx={{
                        display: { xs: 'block', md: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
            </nav>
            {/* <Box component="main" sx={{ p: 3 }}>
                <Toolbar />
            </Box> */}
        </Box>
    );
}

export default Header;
