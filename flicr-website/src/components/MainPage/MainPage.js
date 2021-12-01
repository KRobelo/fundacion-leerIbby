import React from 'react';
import PropTypes from 'prop-types';
import styles from './MainPage.module.scss';

const MainPage = () => (
  <div className={styles.MainPage} data-testid="MainPage">
    MainPage Component
  </div>
);

MainPage.propTypes = {};

MainPage.defaultProps = {};

export default MainPage;
