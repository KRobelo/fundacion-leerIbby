import React from 'react';
import PropTypes from 'prop-types';
import styles from './SiteLogoLine.module.scss';

const SiteLogoLine = () => (
  <div className={styles.SiteLogoLine} data-testid="SiteLogoLine">
     <div className={styles['line-area']} >
       &nbsp;
      </div>
  </div>
);

SiteLogoLine.propTypes = {};

SiteLogoLine.defaultProps = {};

export default SiteLogoLine;
