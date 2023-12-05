import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';
import { Box, Button, Divider } from '@mui/material';

export const NavBar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const menuItems = [
    { text: 'Empresas', to: '/empresas', divider: false },
    { text: 'Oportunidades', to: '/oportunidades', divider: false },
    { text: 'Agenda', to: '/agenda', divider: false },
    { text: 'Mis publicaciones', to: '/misPublicaciones', divider: false },
    { text: 'Mis postulaciones', to: '/misPostulaciones', divider: true },
    { text: 'Ayuda', to: '/ayuda', divider: false },
  ];

  return (
    <AppBar
      position='relative'
      sx={{
        width: '100%',
        padding: 0,
        '@media (min-width:600px)': { padding: 0 },
        backgroundColor: 'white',
        boxShadow: 'none',
      }}
    >
      <Toolbar
        color='black'
        sx={{
          padding: 0,
          '@media (min-width:600px)': { padding: 0 },
        }}
      >
        {!isDesktop && (
          <IconButton
            sx={{ marginLeft: '0' }}
            edge='start'
            color='inherit'
            aria-label='menu'
            onClick={handleMenu}
          >
            <MenuIcon sx={{ color: 'black' }} />
          </IconButton>
        )}
        <Typography
          variant='h6'
          component={NavLink}
          to='/home'
          style={{ flexGrow: 1, textAlign: isDesktop ? 'left' : 'center' }}
        >
          Galicia B2B
        </Typography>
        {isDesktop && (
          <>
            <div
              style={{ flexGrow: 1, display: 'flex', justifyContent: 'center' }}
            >
              {menuItems.map((menuItem, index) => (
                <>
                  <Typography
                    fontSize='14px'
                    key={index}
                    sx={{ margin: '0 10px', fontWeight: '500' }}
                    component={NavLink}
                    to={menuItem.to}
                  >
                    {menuItem.text}
                  </Typography>
                  {menuItem.divider && (
                    <Divider orientation='vertical' color='black' />
                  )}
                </>
              ))}
            </div>
            <Button
              variant='contained'
              component={NavLink}
              to='/publicar'
              sx={{
                margin: '0 20px 0 5px',
                borderRadius: '20px',
                backgroundColor: '#E94335',
                fontSize: '14px',
                fontWeight: '700',
                textTransform: 'none',
              }}
            >
              Publicar
            </Button>
          </>
        )}
        <Box
          paddingRight='5px'
          component={NavLink}
          to='/home'
          sx={{ color: 'black' }}
        >
          LOGO
        </Box>
        {!isDesktop && (
          <Menu
            id='menu-appbar'
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={open}
            onClose={handleClose}
            sx={{ marginTop: '8px', marginLeft: '-16px' }} //Buscar forma adecuada
          >
            {menuItems.map((menuItem, index) => (
              <MenuItem
                key={index}
                onClick={handleClose}
                component={NavLink}
                to={menuItem.to}
              >
                {menuItem.text}
              </MenuItem>
            ))}
          </Menu>
        )}
      </Toolbar>
    </AppBar>
  );
};
