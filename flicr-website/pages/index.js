import Head from "next/head";
import styles from "../styles/Home.module.css";
import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import SiteLogoLine from "../components/SiteLogoLine/SiteLogoLine";
import CompCarousel from "../components/CompCarousel/CompCarousel";



const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function Home() {


  return (
    <div>
    
      <Box  sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} style={{ margin: "auto" }}>
            <Card
              sx={{ maxWidth: 1200 }}
              style={{
                margin: "auto",
                textAlign: "center",
              }}
            >
              {/* 
              <CardMedia
                component="img"
                //height="500"
                image={`/images/Ilustracion.png`}
                alt="green iguana"
              />
              */ }
       
              <CompCarousel/>
            </Card>
          </Grid>
        </Grid>
        <br />
        <br />
        <SiteLogoLine />
        <br />
        <br />

        <Grid container spacing={0} className={styles["bg-row"]}>
          <Grid
            style={{
              margin: "auto",
              textAlign: "center",
            }}
            item
            xs={12}
            md={6}
            lg={6}
          >
            <img src="/images/quehacemos.png" className={styles['round-image']} ></img>
          </Grid>
          <Grid item xs={12} md={6} lg={6}>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <div
              style={{
                maxWidth: 450,
                margin: "0px auto",
                color: "white",
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
            </div>
          </Grid>
        </Grid>
        <br />
        <br />

        <br />

        <Grid className={styles["bg-row"]} container spacing={0}>
          <Grid item xs={12} md={6} lg={6}>
            <br></br>
            <br></br>
            <br></br>
            <br></br>

            <div
              style={{
                maxWidth: 450,
                margin: "0px auto",
                color: "white",
              }}
            >
              <h1 style={{ color: "white" }}>¿Qué Hacemos?</h1>
              <p>
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
            </div>
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            lg={6}
            style={{
              margin: "auto",
              textAlign: "center",
            }}
          >
            <img src="/images/quienssomos.png" className={styles['round-image']}></img>
          </Grid>
        </Grid>

        <div id="graybar" className={styles["gray-bar"]}>
          <img
            src="images/mision.png"
            className={styles['img-circle']}
          ></img>
          <img
            src="images/vision.png"
            className={styles['img-circle']}
          ></img>
          <img
            src="images/valores.png"
           className={styles['img-circle']}
          ></img>
        </div>
        <br />

        <div id="graybar" className={styles["bg-row-small"]}>
     <h3>Mas de 250 Centros Educativos Púbilcos y Privados Beneficiados alrededor del país.</h3>
        </div>


        <div
          className={styles["proyectos-bar"]}
          style={{
            margin: "auto",
            textAlign: "center",
          }}
        >
          <img style={{ margin: "auto" }} className={styles['round-image-proyectos']} src="images/proyectos.png" ></img>
        </div>
      </Box>

      <br></br>
      <br></br>
    </div>
  );
}
