import React from "react";
import PropTypes from "prop-types";
import styles from "./SiteFooter.module.scss";
import SiteLogoLine from "../SiteLogoLine/SiteLogoLine";
import CompSocialMedia from "../CompSocialMedia/CompSocialMedia";
import Grid from "@mui/material/Grid";
const SiteFooter = () => (
  <div
    className={styles.SiteFooter}
    style={{ margin: "auto" }}
    data-testid="SiteFooter"
  >
    <div id="graybar" style={{ backgroundColor: "#333" }}>
      <Grid container className={styles['grid']}  >
        <Grid item xs={12} md={4} lg={4}>
          <img src="/images/logoTransparent.png" style={{ maxWidth: 250 }}></img>
          <br></br>
          <p style={{padding:4}}>
            Somos una organización sin fines de lucro dedicada a promover la
            lectura en niños y jóvenes mediante diversas actividades sociales.
            Les Invitamos a formar parte de nuestra comunidad participando y
            corriendo la voz.
          </p>
        </Grid>
        <Grid item xs={12} md={4} lg={4}>
          <p style={{padding:4}}>
            <h2>Contacto :</h2><br/>
            Apartado postal:<br/>
            Asociación Leer/IBBY Costa Rica 
            23-7051  30701 Cartago, Costa Rica <br/>
            https://www.fundacionleer.org <br/>
            +(506) 2438 0914 <br/>
            contacto@fundacionleer.org
          </p>
        
        </Grid>
        <Grid item xs={12} md={4} lg={4}>
          <h1>© 2021 Fundación Leer/IBBY CR. </h1>
          <h3>Fundacionleer.org</h3>
        </Grid>
      </Grid>
    </div>
<CompSocialMedia/>
    <SiteLogoLine />
  </div>
);

SiteFooter.propTypes = {};

SiteFooter.defaultProps = {};

export default SiteFooter;
