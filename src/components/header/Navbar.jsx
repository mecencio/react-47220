import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import CartWidget from "./CartWidget.jsx";

function Navbar() {
  const [anchorElCat, setAnchorElCat] = React.useState(null);

  const handleOpenCatMenu = (event) => {
    setAnchorElCat(event.currentTarget);
  };
  const handleCloseCatMenu = () => {
    setAnchorElCat(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "'Dancing Script', cursive",
              fontWeight: 700,
              letterSpacing: ".5rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            ECOM
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <Button
              key={"Home"}
              sx={{ my: 2, color: "white", display: "block" }}
            >
              Home
            </Button>
            <Box sx={{ flexGrow: 0 }}>
              <Button
                onClick={handleOpenCatMenu}
                key={"Categories"}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                Categories
              </Button>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElCat}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElCat)}
                onClose={handleCloseCatMenu}
              >
                <MenuItem key={"footwear"} onClick={handleCloseCatMenu}>
                  <Typography textAlign="center">Footwear</Typography>
                </MenuItem>
                <MenuItem key={"clothing"} onClick={handleCloseCatMenu}>
                  <Typography textAlign="center">Clothing</Typography>
                </MenuItem>
                <MenuItem key={"accessories"} onClick={handleCloseCatMenu}>
                  <Typography textAlign="center">Accessories</Typography>
                </MenuItem>
              </Menu>
            </Box>
            <Button
              key={"Products"}
              sx={{ my: 2, color: "white", display: "block" }}
            >
              Products
            </Button>
            <Button
              key={"Contact us"}
              sx={{ my: 2, color: "white", display: "block" }}
            >
              Contact us
            </Button>
          </Box>
          <Box sx={{ flexGrow: 0, mr: 4 }}>
            <CartWidget />
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton sx={{ p: 0 }}>
                <Avatar>U</Avatar>
              </IconButton>
            </Tooltip>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;