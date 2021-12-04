import React from "react";
import PropTypes from "prop-types";
import styles from "./SiteProyectos.module.scss";
import SiteLogoLine from "../SiteLogoLine/SiteLogoLine";

const SiteProyectos = () => (
  <div className={styles.SiteProyectos} data-testid="SiteProyectos">
   <br/><br/> 
    <h1>Caminos para salir de la tierra de nadie</h1>
    <p>
      {" "}
      Es una muestra integrada de la vida y obra de Jella Lepman, fundadora de
      la Biblioteca Internacional de la Juventud en Munich y de IBBY, cuya
      trayectoria en el campo de los derechos humanos, especialmente en lo
      social y cultural ha servido de inspiración a muchos. Al finalizar la
      Segunda Guerra Mundial, cuando en Alemania el tejido social estaba
      desgarrado, ella tuvo la iniciativa de fortalecer a los niños acercándolos
      a los libros, y nutrirlos de historias que trataran de algo más que
      bombardeos y vehículos militares.
    </p>
    <br/><br/>
    <SiteLogoLine />
    <br/><br/>
    <h1>La vuelta al mundo EN 70 mapas</h1>
    <p>
      {" "}
      Muchos libros infantiles y juveniles incluyen mapas que 
      hacen sus locaciones y paisajes mucho más fáciles de 
      imaginar, o ayudan a ubicar la historia con más facilidad. 
      Esta muestra recoge 70 mapas, reales y ficticios, sacados 
      de libros de la Biblioteca Internacional de la Juventud en 
      Munich, que llevan a hacer un recorrido visual de cómo 
      sus creadores perciben el mundo, o cómo imaginan sus 
      propios mundos imaginarios.
    </p>


    <br/><br/>
    <h1> La lista de honor</h1>
    <p>El certamen Lista de honor de la Fundación Leer/
IBBY selecciona las mejores publicaciones de 
literatura infantil y juvenil en Costa Rica. Las obras 
seleccionadas pasan a formar parte del catálogo 
La Lista de Honor de la International Board on Books 
for Young People (IBBY internacional), que se realiza 
cada dos años y se da a conocer en diversas 
exposiciones, congresos y ferias internacionales
</p>
<p>En el 2017 se realizó la primera edición de este certamen, 
para la cual se recibieron más de 60 títulos. En esta ocasión 
las personas galardonadas fueron Camila Schumacher, en la 
categoría de creación literaria, por su libro De poco un todo; 
Mariela Aguilar en la categoría de mejor traducción, por su 
trabajo en el libro Clara Guevara y Glúcar de Azúcar; 
y Ruth Angulo Cruz, en la categoría de Ilustración, por su 
trabajo en el libro Los Cuentos de mi Tía Panchita, de la 
autora costarricense Carmen Lyra. Además, se le rindió 
homenaje a Lara Ríos y a su obra Mo, que fue la 
cuarta en representar a Costa Rica en la 
Lista de Honor IBBY 2018
</p>
<br/><br/>
<h1>Los libros violetas</h1>
<p>Los cuentos y relatos son una fuente inagotable para la 
imaginación y la creación, y a partir de ellos los niños y niñas 
se acercan a nuevas formas de ver y entender el mundo y de 
crear sus propias historias.
</p>
<p>
Los libros violetas es un proyecto que busca impulsar una 
formación igualitaria y libre de discriminación, y contribuir a la 
educación de niños y niñas sobre equidad de género usando 
como herramienta la literatura.
</p>
<p>El proyecto incluye fichas de trabajo para seis libros, 
con guías de preguntas, actividades y materiales didácticos 
que permiten estudiar con los niños y niñas temáticas como la 
equidad y los roles y estereotipos de género de forma dinámica y 
entretenida a partir de los textos. Los libros utilizados son: 
</p>
<br/><br/>
<ul>
  <li>Papá es un campeón </li>
  <li>Carlos Rubio, Raúl pintando de azul </li>
  <li>Ana María Machado, Mo </li>
  <li>Lara Ríos, Aventuras de Dora la lora y Chico el perico</li>
  <li>Lara Ríos, La danta en pasarela </li>
  <li>Carlos Rubio, El árbol solito</li>
  <li>Floria Jiménez</li>
  
</ul>
<br/><br/>
 <SiteLogoLine />
<br/><br/>
<h1> Verde que te leo verde</h1>
<p> Verde que te leo verde es un proyecto que busca trabajar 
los temas de protección de la naturaleza y la soberanía 
alimentaria con niños y niñas de una manera creativa y 
divertida, para así impulsar el desarrollo local sostenible 
desde la niñez.
</p>
<p>En este se estudia la clasificación de los desechos sólidos, la 
deforestación, el cambio climático y la alimentación responsable, 
utilizando recursos como cuentos, videos y discusiones guiadas. 
Además, se proponen actividades de creación artística y literaria 
para que las niñas y niños puedan poner en práctica lo aprendido 
y además divertirse en el proceso.
</p>

<br/><br/>
  </div>
);

SiteProyectos.propTypes = {};

SiteProyectos.defaultProps = {};

export default SiteProyectos;
