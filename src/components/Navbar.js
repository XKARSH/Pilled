import { React, useState } from "react";
import {
  AppBar,
  Box,
  Button,
  Container,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Pilled from "../images/Logo.svg";

const pages = ["Home", "About us", "Services", "Contact Us"];

export default function Navbar() {
  // State variables for the navigation and user menus
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

  // Functions for handling opening and closing of the navigation and user menus
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

  return (
    //  Navbar with a dark background and no elevation
    <AppBar position='static' sx={{ background: "#1B1B1B" }} elevation={0}>
      <Container maxWidth='xl' sx={{ paddingTop: "36px" }}>
        <Toolbar sx={{ paddingLeft: "40px", paddingRight: "40px" }}>
          {/* Pilled logo */}
          <img src={Pilled} alt='Pilled' sx={{ marginLeft: "16px" }} />

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "center",
            }}
          >
            {/* Navigation buttons */}
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{
                  mx: { xs: "8px", md: "24px" },
                  color: "#FFFFFF99",
                  fontFamily: "Poppins",
                  fontSize: { xs: "12px", md: "16px" },
                }}
                variant='text'
              >
                {page}
              </Button>
            ))}
          </Box>

          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            {/* "Free quote" button */}
            <Button
              sx={{
                backgroundColor: "#72775B",
                fontFamily: "Poppins",
                fontSize: "13px",
                px: "37px",
                py: "14px",
              }}
              variant='contained'
            >
              Free quote
            </Button>
          </Box>

          {/* For Mobile Devices */}
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            {/* The navigation menu icon for mobile devices */}
            <IconButton
              sx={{
                backgroundColor: "#72775B",
                borderRadius: "4px",
                marginLeft: "243px",
              }}
              size='large'
              aria-label='menu'
              aria-controls='menu-appbar'
              aria-haspopup='true'
              onClick={handleOpenNavMenu}
              color='inherit'
            >
              <MenuIcon />
            </IconButton>
          </Box>
        </Toolbar>

        <Box sx={{ display: { xs: "block", md: "none" } }}>
          {/* The navigation menu for mobile devices */}
          <Menu
            id='menu-appbar'
            anchorEl={anchorElNav}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
          >
            {pages.map((page) => (
              <MenuItem key={page} onClick={handleCloseNavMenu}>
                <Typography textAlign='center'>{page}</Typography>
              </MenuItem>
            ))}
          </Menu>
        </Box>
      </Container>
    </AppBar>
  );
}
