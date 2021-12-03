import React from 'react';
import PropTypes from 'prop-types';
import styles from './SiteMain.module.scss';

const SiteMain = () => (
  <div className={styles.SiteMain} data-testid="SiteMain">
    SiteMain Component
  </div>
);

SiteMain.propTypes = {};

SiteMain.defaultProps = {};

export default SiteMain;
