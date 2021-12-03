import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import stylesLocal from './CompCarousel.module.scss';
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';

 
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const CompCarousel = (props) =>{

 return  (
    <div className={stylesLocal.CompCarousel} data-testid="CompCarousel">
      <Carousel autoPlay={true} infiniteLoop={true}>
                  <div>
                      <img src="/images/Ilustracion.png" />
                      <p className="legend">Fundación Leer/IBBY Costa Rica</p>
                  </div>
                  <div>
                  <img src="/images/Ilustracion.png" />
                  <p className="legend">Fundación Leer/IBBY Costa Rica</p>
                  </div>
                  <div>
                  <img src="/images/Ilustracion.png" />
                  <p className="legend">Fundación Leer/IBBY Costa Rica</p>
                  </div>
              </Carousel>
    </div>
  );  
}

CompCarousel.propTypes = {};

CompCarousel.defaultProps = {};

export default CompCarousel;
