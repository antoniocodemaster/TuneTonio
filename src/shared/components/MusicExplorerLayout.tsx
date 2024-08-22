import { useState } from 'react';
import { styled, useTheme, Theme, CSSObject } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import CssBaseline from '@mui/material/CssBaseline';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { Link } from 'react-router-dom';
import {
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from '@mui/material';
import SpeakerIcon from '@mui/icons-material/Speaker';
import LogoutIcon from '@mui/icons-material/Logout';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import AssessmentIcon from '@mui/icons-material/Assessment';

const drawerWidth = 220;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(9)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

interface AppBarStyledProps {
  open?: boolean;
}

const AppBarStyled = styled(AppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<AppBarStyledProps>(({ theme, open }) => ({
  background: '#212121',
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

interface DrawerStyledProps {
  open?: boolean;
}

const iconsColor = '#8c68cd';

const DrawerStyled = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== 'open',
})<DrawerStyledProps>(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: 'nowrap',
  boxSizing: 'border-box',
  ...(open && {
    ...openedMixin(theme),
    '& .MuiDrawer-paper': openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    '& .MuiDrawer-paper': closedMixin(theme),
  }),
}));

interface LayoutProps {
  children: React.ReactNode;
}

const MusicExplorerLayout = ({ children }: LayoutProps) => {
  const theme = useTheme();

  const [open, setOpen] = useState<boolean>(true);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />

      <AppBarStyled
        position="fixed"
        open={open}
        sx={{ backgroundColor: '#7758ae', color: '#fff' }}
      >
        <Toolbar>
          <Box
            sx={{
              width: '100%',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <Box>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={handleDrawerOpen}
                edge="start"
                sx={{
                  marginRight: 5,
                  ...(open && { display: 'none' }),
                }}
              >
                <MenuIcon />
              </IconButton>
            </Box>
          </Box>
        </Toolbar>
      </AppBarStyled>

      <DrawerStyled variant="permanent" open={open}>
        <Box className="flex ">
          <Typography variant="h2" className="app-logo">
            TuneTonio
          </Typography>
          <DrawerHeader>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === 'rtl' ? (
                <ChevronRightIcon />
              ) : (
                <ChevronLeftIcon />
              )}
            </IconButton>
          </DrawerHeader>
        </Box>

        {/* Pages List */}
        <List className="nav-list">
          <Link to="/music-explorer">
            <ListItem>
              <ListItemIcon>
                <MusicNoteIcon sx={{ color: iconsColor }} />
              </ListItemIcon>
              <ListItemText primary="Explore Music" />
            </ListItem>
          </Link>
          <Link to="/music-explorer/favorites">
            <ListItem>
              <ListItemIcon>
                <SpeakerIcon sx={{ color: iconsColor }} />
              </ListItemIcon>
              <ListItemText primary="My Favorites" />
            </ListItem>
          </Link>

          <Link to="/music-explorer/most-loved">
            <ListItem>
              <ListItemIcon>
                <AssessmentIcon sx={{ color: iconsColor }} />
              </ListItemIcon>
              <ListItemText primary="Most Loved" />
            </ListItem>
          </Link>

          <Link to="/">
            <ListItem>
              <ListItemIcon>
                <LogoutIcon sx={{ color: iconsColor }} />
              </ListItemIcon>
              <ListItemText primary="Logout" />
            </ListItem>
          </Link>
        </List>
      </DrawerStyled>
      <Box
        sx={{
          flexGrow: 1,
          p: 3,
          minHeight: '100svh',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <DrawerHeader />
        {children}
      </Box>
    </Box>
  );
};

export default MusicExplorerLayout;
