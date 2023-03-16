import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import logo from '../../utils/logo small.png';
import {useNavigate} from "react-router-dom";
import { FormControl, InputLabel, Select } from '@mui/material';


export default function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const navigate = useNavigate()

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [anchorEl2, setAnchorEl2] = React.useState(null);
  const open = Boolean(anchorEl);
  const open2 = Boolean(anchorEl2);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleClick2 = (event) => {
    setAnchorEl2(event.currentTarget);
    console.log(anchorEl2)
  };
  const handleClose2 = () => {
    setAnchorEl2(null);
  };
  return (
    <AppBar position="static" style={{backgroundColor:"#BEA062"}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
                <MenuItem key={"Nosotros"} onClick={()=> navigate("/Nosotros")}>
                  <Typography textAlign="center">Sobre Nosotros</Typography>
                </MenuItem>
                <MenuItem key={"Contacto"} onClick={()=> navigate("/Contacto")}>
                  <Typography textAlign="center">Contacto</Typography>
                </MenuItem>
            </Menu>
            <Button
                key={"Home"}
                onClick={()=> navigate("/")}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                🏠
              </Button>
            <Button
        id="demo-positioned-button"
        aria-controls={open ? 'demo-positioned-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        sx={{ my: 2, color: 'white', display: 'block' }}
      >
        Escuelas
      </Button>
      <Menu
        id="escuelas"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <MenuItem onClick={()=> navigate("/DanzasArabes")}>Danzas Arabes</MenuItem>
        <MenuItem onClick={()=> navigate("/DanzasClasicas")}>Danzas Clasicas</MenuItem>
        <MenuItem onClick={()=> navigate("/DanzaContemporanea")}>Danza Contemporanea</MenuItem>
        <MenuItem onClick={()=> navigate("/Ritmica")}>Ritmica</MenuItem>
        <MenuItem onClick={()=> navigate("/Taekwondo")}>Taekwondo</MenuItem>
        
      </Menu>
            <Button
        id="demo-positioned-button"
        aria-controls={open2 ? 'demo-positioned-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open2 ? 'true' : undefined}
        onClick={handleClick2}
        sx={{ my: 2, color: 'white', display: 'block' }}
      >
        Actividades
      </Button>
      <Menu
        id="actividades"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl2}
        open={open2}
        onClose={handleClose2}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <MenuItem onClick={()=> navigate("/Baile")}>Baile</MenuItem>
        <MenuItem onClick={()=> navigate("/FitnessDance")}>Fitness Dance</MenuItem>
        <MenuItem onClick={()=> navigate("/Flexibilidad")}>Flexibilidad</MenuItem>
        <MenuItem onClick={()=> navigate("/Funcional")}>Funcional</MenuItem>
        <MenuItem onClick={()=> navigate("/Pilates")}>Pilates</MenuItem>
        <MenuItem onClick={()=> navigate("/RitmosLatinos")}>Ritmos Latinos</MenuItem>
      </Menu>
          </Box>
          {/* <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} /> */}
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
          
              <Button
                key={"Home"}
                onClick={()=> navigate("/")}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                Home
              </Button>
              <Button
                key={"About"}
                onClick={()=> navigate("/Nosotros")}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                Sobre Nosotros
              </Button>
              <Button
        id="demo-positioned-button"
        aria-controls={open ? 'demo-positioned-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        sx={{ my: 2, color: 'white', display: 'block' }}
      >
        Escuelas
      </Button>
      <Menu
        id="escuelas"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <MenuItem onClick={()=> navigate("/DanzasArabes")}>Danzas Arabes</MenuItem>
        <MenuItem onClick={()=> navigate("/DanzasClasicas")}>Danzas Clasicas</MenuItem>
        <MenuItem onClick={()=> navigate("/DanzaContemporanea")}>Danza Contemporanea</MenuItem>
        <MenuItem onClick={()=> navigate("/Ritmica")}>Ritmica</MenuItem>
        <MenuItem onClick={()=> navigate("/Taekwondo")}>Taekwondo</MenuItem>
        
      </Menu>
        <Button
        id="demo-positioned-button"
        aria-controls={open2 ? 'demo-positioned-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open2 ? 'true' : undefined}
        onClick={handleClick2}
        sx={{ my: 2, color: 'white', display: 'block' }}
      >
        Actividades
      </Button>
      <Menu
        id="actividades"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl2}
        open={open2}
        onClose={handleClose2}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <MenuItem onClick={()=> navigate("/Baile")}>Baile</MenuItem>
        <MenuItem onClick={()=> navigate("/FitnessDance")}>Fitness Dance</MenuItem>
        <MenuItem onClick={()=> navigate("/Flexibilidad")}>Flexibilidad</MenuItem>
        <MenuItem onClick={()=> navigate("/Funcional")}>Funcional</MenuItem>
        <MenuItem onClick={()=> navigate("/Pilates")}>Pilates</MenuItem>
        <MenuItem onClick={()=> navigate("/RitmosLatinos")}>Ritmos Latinos</MenuItem>
      </Menu>
              
              <Button
                key={"Contact"}
                onClick={()=> navigate("/Contacto")}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                Contacto
              </Button>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
            
                <MenuItem key={"Perfil"} onClick={()=> navigate("/Perfil")}>
                  <Typography textAlign="center">{"Perfil"}</Typography>
                </MenuItem>
                <MenuItem key={"LogOut"} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{"Cerrar Sesion"}</Typography>
                </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
