import Head from "next/head";
import styles from "./SiteMain.module.scss";
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
import { getToolbarUtilityClass } from "@mui/material";
import { useRouter } from 'next/router'
const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));
export default function SiteMain() {
  
const router = useRouter();
  return (
    <div className={styles.SiteMain}>
      <Box sx={{ flexGrow: 1 }}>
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
              */}

              <CompCarousel />
            </Card>
          </Grid>
        </Grid>
   
        <SiteLogoLine />
        <br />
 

        <div  className={styles["bg-row"]}>
        <Grid style={{maxWidth:1200, margin:'auto'}} container spacing={0}  >
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
            <img
              src="/images/quienssomos.png"
              className={styles["round-image"]}
            ></img>
          </Grid>
          <Grid item xs={12} md={6} lg={6} sc>
    
            <div
             className={styles['grid-home']}
            >
              <h1 style={{ color: "white" }}>¿Quiénes Somos?</h1>
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
          </div>
      

        <div  className={styles["bg-row"]}>
        <Grid style={{maxWidth:1200, margin:'auto'}} container spacing={0}  >
          <Grid item xs={12} md={6} lg={6}>
           
            <div
                   className={styles['grid-home']}
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
            <img
              src="/images/quehacemos.png"
              className={styles["round-image"]}
            ></img>
          </Grid>
        </Grid>
</div>
        <div id="graybar" className={styles["gray-bar"]}>
          <img src="images/mision.png" onClick={e=>router.push("/quienes-somos")} className={styles["img-circle"]}></img>
          <img src="images/vision.png" onClick={e=>router.push("/quienes-somos")} className={styles["img-circle"]}></img>
          <img src="images/valores.png" onClick={e=>router.push("/quienes-somos")} className={styles["img-circle"]}></img>
        </div>
        <br />

        <div id="graybar" className={styles["bg-row-small"]}>
          <h3>
            Mas de 250 Centros Educativos Púbilcos y Privados Beneficiados
            alrededor del país.
          </h3>
        </div>

        <div
          className={styles["proyectos-bar"]}
          style={{
            margin: "auto",
            textAlign: "center",
          }}
          onClick={e=>router.push("/proyectoss")} 
        >
          <img
            style={{ margin: "auto" }}
            className={styles["round-image-proyectos"]}
            src="images/proyectos.png"
          ></img>
        </div>
      </Box>

      <br></br>
 
    </div>
  );
}
