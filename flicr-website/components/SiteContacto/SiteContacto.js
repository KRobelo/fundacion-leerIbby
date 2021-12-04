import React from 'react';
import PropTypes from 'prop-types';
import styles from './SiteContacto.module.scss';
import sendMail  from "../../helpers/sendMail";
const SiteContacto = () => {
  const sendMailFn=()=>{
    sendMail();
  }
  return(
    <div className={styles.SiteContacto} data-testid="SiteContacto">
      SiteContacto Component
      <button onClick={sendMailFn}>Send Mail</button>
    </div>
  );
  
}
SiteContacto.propTypes = {};

SiteContacto.defaultProps = {};

export default SiteContacto;
