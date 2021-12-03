import Head from "next/head";
import styles from "./SiteQuienesSomos.module.scss";
import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import SiteLogoLine from "../SiteLogoLine/SiteLogoLine";
import CompCarousel from "../CompCarousel/CompCarousel";



const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function SiteQuienesSomos() {


  return (
    <div className={styles.SiteQuienesSomos} >
    
      <Box  sx={{ flexGrow: 1 }}>
    
     

     

            <div
              style={{
                maxWidth: 450,
                margin: "0px auto",
                color: "#222",
              }}
            >
              <h1>¿Quiénes Somos?</h1>
              <p className={styles["position-p"]}>
                La Fundación Leer/IBBY Costa Rica es una organización dedicada a
                la creación de comunidades lectoras a través de mediadores
                capacitados y actividades lúdicas, en espacios de diálogo.
              </p>
              <p>
                Concebimos la lectura como un bien social al que la niñez y en
                la juventud tenga acceso para su formación y gozo, con el fin de
                contribuir al desarrollo de personas libres y reflexivas que
                participen en la construcción de una sociedad más justa.
              </p>
              <br></br>
            <br></br>
            <br></br>
            <br></br>
            </div>
       

     
        <br />

      

      </Box>

      <div
          className={styles["bg-row"]}
          style={{
            margin: "auto",
            textAlign: "center",
          }}
        >
   <img src="/images/quienssomos.png" className={styles['round-image']}></img>
        </div>
      <br></br>
      <br></br>
    </div>


  );
}
