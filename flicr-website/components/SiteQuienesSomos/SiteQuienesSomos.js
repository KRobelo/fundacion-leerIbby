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
    <div className={styles.SiteQuienesSomos}>
      <div
        className={styles["bg-row-que-hacemos-small"]}
        style={{
          margin: "auto",
          textAlign: "center",
        }}
      >
        <img
          src="/images/quehacemos.png"
          className={styles["round-image-small"]}
        ></img>
      </div>
      <br />
      <br />
      <Box sx={{ flexGrow: 1 }}>
        <div
          style={{
            maxWidth: 650,
            margin: "0px auto",
            color: "#222",
          }}
        >
          <h1
            style={{
              textAlign: "center",
            }}
          >
            ¿Quiénes Somos?
          </h1>
          <p className={styles["position-p"]}>
            La Fundación Leer/IBBY Costa Rica es una organización dedicada a la
            creación de comunidades lectoras a través de mediadores capacitados
            y actividades lúdicas, en espacios de diálogo.
          </p>
          <br></br>
          <p className={styles["position-p"]}>
            Concebimos la lectura como un bien social al que la niñez y en la
            juventud tenga acceso para su formación y gozo, con el fin de
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
      <div id="graybar" className={styles["gray-bar-que-hacemos"]}>
        <Grid container spacing={2}>
          <Grid
            item
            xs={12}
            md={6}
            lg={6}
            style={{
              margin: "auto",
              textAlign: "center",
            }}
          ></Grid>
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
              src="/images/mision.png"
              className={styles["img-circle"]}
            ></img>

            <p>
              {" "}
              La Fundación Leer/IBBY Costa Rica es una organización sin fines de
              lucro con sede en Cartago, Costa Rica que trabaja para: • Motivar
              la lectura por placer y la literatura de calidad. • Acompañar en
              el proceso lector a la niñez y a la juventud con el fin de que
              obtengan las herramientas necesarias que les permitan. • Ejecutar
              a nivel nacional proyectos que fortalezcan de la educación, el
              fomento de la lectura y la escritura, la literatura y así como las
              diferentes manifestaciones artísticas a la formación del diálogo,
              el respeto y el ejercicio de los derechos humanos. • Propiciar a
              la apropiación de espacios públicos y también de encuentro
              ciudadano
            </p>
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
              src="/images/vision.png"
              className={styles["img-circle"]}
            ></img>
            <p>
              Ser una institución reconocida a nivel nacional e internacional en
              el desarrollo de programas y proyectos que permiten el crecimiento
              de la cultura escrita
            </p>
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
          ></Grid>

          <Grid
            item
            xs={12}
            md={6}
            lg={6}
            style={{
              margin: "auto",
              textAlign: "center",
            }}
          ></Grid>
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
              src="/images/valores.png"
              className={styles["img-circle"]}
            ></img>

            <p>
              <h3>Solidaridad </h3>
              Construimos un enfoque de desarrollo basado en Derechos Humanos,
              orientado a su cumplimiento y a erradicar la desigualdad.
              <h3>Compomiso</h3>
              Actuamos comprometidos en el cumplimiento de nuestra misión y
              visión y con la integridad
              <h3>Excelencia</h3>
              Aseguramos la consecución de nuestros objetivos y buscamos el
              mayor impacto de nuestras actuaciones a través de la calidad, la
              mejora continua y la optimización de nuestras capacidades y
              recursos.
              <h3>Participacion</h3>
              Fomentamos los principios democráticos y participativos como
              medios necesarios para la transformación social y como fin
              inherente al desarrollo
              <h3>Transparencia</h3>
              Basamos nuestra labor en la honestidad, la mutua responsabilidad y
              el máximo acceso a la información, como pilares de una rendición
              de cuentas social y económica.
              <h3>Unidad</h3>
              Creemos en el trabajo en equipo y en la colaboración con otras
              organizaciones e instituciones para potenciar sinergias y mejorar
              el rendimiento de nuestro trabajo
            </p>
          </Grid>
        </Grid>
      </div>
      <div
        className={styles["bg-row"]}
        style={{
          margin: "auto",
          textAlign: "center",
        }}
      >
        <img
          src="/images/quienssomos.png"
          className={styles["round-image"]}
        ></img>
      </div>
      <br></br>
      <br></br>
    </div>
  );
}
