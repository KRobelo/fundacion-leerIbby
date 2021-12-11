import React from "react";
import PropTypes from "prop-types";
import styles from "./SiteContacto.module.scss";
import sendMail from "../../helpers/sendMail";
import CompSubHeader from "../../components/CompSubHeader/CompSubHeader";

import Grid from "@mui/material/Grid";
const SiteContacto = () => {
  const sendMailFn = () => {
    sendMail();
  };
  return (
    <div className={styles.SiteContacto} data-testid="SiteContacto">
      <CompSubHeader />

      <h1 style={{ margin: "auto", textAlign: "center" }}>
        {" "}
        Fundación Leer/IBBY Costa Rica
      </h1>
      <br />
      <p style={{ margin: "auto", textAlign: "center" }}>
        Más de <b>17.000</b> mil centros educativos públicos y privados
        alrededor del país{" "}
      </p>
      <Grid
        style={{ margin: "auto", maxWidth: "1200px" }}
        container
        spacing={0}
      >
        <Grid
          item
          style={{ textAlign: "center", margin: "auto" }}
          xs={12}
          md={6}
          lg={6}
        >
          <button onClick={sendMailFn}>Send Mail</button>
          <br />
          <img src="/images/logoTransparent.png" style={{ width: 275 }} />
        </Grid>
        <Grid item xs={12} md={6} lg={6}>
          <h2>Contacto :</h2>
          <p>+(506) 8312 6716</p>
          <p>+(506) 2438 0914</p>
          <p>https://www.fundacionleer.org</p>

          <h2>Apartado postal:</h2>
          <p>Asociación Leer/IBBY Costa Rica</p>
          <p>23-7051 30701 Cartago, Costa Rica</p>

          <p>contacto@fundacionleer.org</p>
        </Grid>
      </Grid>
      <br />
    </div>
  );
};
SiteContacto.propTypes = {};

SiteContacto.defaultProps = {};

export default SiteContacto;
