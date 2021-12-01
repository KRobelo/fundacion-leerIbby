import React from 'react';
import PropTypes from 'prop-types';
import styles from './SiteContainer.module.scss';
import Header from '../Header/Header';
import MainPage from '../MainPage/MainPage';
import Footer from '../Footer/Footer';

const SiteContainer = () => (
  <div className={styles.SiteContainer} data-testid="SiteContainer">
   <Header/>
   <MainPage/>
   <Footer/>
  </div>
);

SiteContainer.propTypes = {};

SiteContainer.defaultProps = {};

export default SiteContainer;
