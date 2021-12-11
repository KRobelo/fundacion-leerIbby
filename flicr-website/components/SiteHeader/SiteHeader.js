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
import styles from "./SiteHeader.module.scss";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from "@mui/icons-material/Email";

import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import CompSocialMedia from "../CompSocialMedia/CompSocialMedia";

const pages = ["¿Quiénes Somos?", "¿Qué Hacemos?", "Dona", "Contacto"];
const pagesObj = [
  { text: "Inicio", url: "/" },
  { text: "¿Quiénes Somos?", url: "/quienes-somos" },
  { text: "¿Qué Hacemos?", url: "/que-hacemos" },

  { text: "Dona / Contacto", url: "/contacto" },
  { text: "Proyectos", url: "/proyectos" },
];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

const SiteHeader = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

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
    <div
      className={styles.SiteHeader}
      style={{ margin: "auto" }}
      data-testid="Siteheader"
    >
      <AppBar position="static" className={styles["header-area"]}>
        <Container className={styles["menu-row"]}>
          <Toolbar>
            <Box sx={{ flexGrow: 2, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                color="inherit"
              >
                <MenuIcon
                  size="large"
                  style={{
                    color: "black",
                    opacity: "0.0",
                    margin: "8px 0px 0px 18px",
                    transform: "scale(2)",
                  }}
                />
              </IconButton>
            </Box>

            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "none", md: "flex", marginLeft: 140 },
              }}
            >
              {console.log("pagesObj", pagesObj)}

              {/* Desktop */}
              {pagesObj.map((page, index) => (
                <Button
                  key={index}
                  href={page.url}
                  //onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  {page.text}
                </Button>
              ))}
            </Box>

            <Box sx={{ flexGrow: 0 }}>
              <div style={{ paddingLeft: 5 }}>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleOpenNavMenu}
                  color="inherit"
                  sx={{
                    display: { xs: "flex", md: "none" },
                  }}
                >
                  <MenuIcon
                    style={{
                      opacity: "1.0",
                      transform: "scale(2.6)",
                      marginTop: 16,
                    }}
                  />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorElNav}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "left",
                  }}
                  open={Boolean(anchorElNav)}
                  onClose={handleCloseNavMenu}
                  sx={{
                    display: { xs: "block", md: "none" },
                  }}
                >
                  {/* Mobile */}

                  {pagesObj.map((page, index) => (
                    <Button
                      key={index}
                      href={page.url}
                      //onClick={handleCloseNavMenu}
                      sx={{ my: 2, color: "#009bdb", display: "block" }}
                    >
                      {page.text}
                    </Button>
                  ))}
                </Menu>
                <IconButton
                  disableFocusRipple
                  disableRipple
                  className={styles["social-media-icons-desktop"]}
                  href={
                    "https://www.facebook.com/Fundaci%C3%B3n-Leer-IBBY-Costa-Rica-133173946851807"
                  }
                  target={"_blank"}
                  sx={{ p: 0 }}
                >
                  <FacebookIcon /> &nbsp;&nbsp;
                </IconButton>
                <IconButton
                  disableFocusRipple
                  disableRipple
                  className={styles["social-media-icons-desktop"]}
                  href={"https://www.instagram.com/fundacionleercostarica/"}
                  target={"_blank"}
                  sx={{ p: 0 }}
                >
                  <InstagramIcon /> &nbsp;&nbsp;
                </IconButton>
                <IconButton
                  disableFocusRipple
                  disableRipple
                  className={styles["social-media-icons-desktop"]}
                  href={
                    "https://www.youtube.com/channel/UCk7gCO5QZnbHceW6D74mZLQ"
                  }
                  target={"_blank"}
                  sx={{ p: 0 }}
                >
                  <YouTubeIcon />
                </IconButton>
              </div>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem key={setting} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      <div id="graybar" className={styles["gray-bar-header"]}>
        <LocationOnIcon /> <span> Cartago, Costa Rica </span>
        &nbsp;&nbsp; &nbsp;&nbsp;
        <a
          style={{ display: "inline-block" }}
          href="mailto:fundacionleercostarica@gmail.com"
          target="_blank"
          without={true}
          rel="noreferrer"
        >
          <EmailIcon /> <span>fundacionleercostarica@gmail.com </span>
        </a>{" "}
        &nbsp;&nbsp; &nbsp;&nbsp;
        <a
          href="https://api.whatsapp.com/send?phone=50683126746"
          target="_blank"
          without={true}
          rel="noreferrer"
        >
          <WhatsAppIcon /> <span>83126746</span>
        </a>
      </div>
      <CompSocialMedia />
    </div>
  );
};
export default SiteHeader;
