import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import styles from './CompLoader.module.scss';
import Loader from "react-loader-spinner";
const CompLoader = (props) => {
 
 
  const [timeOut, setTimeOut] = React.useState(1250); 
  const [shouldHide, setShouldHide] = React.useState(false); 
   
  useEffect(() => { 
    
    setTimeout(returnCall, timeOut);
 }, [])
 const  returnCall=()=> {
  props.callBackFn();
  setShouldHide(true)
 }
  return (
 
    <div style={{display : shouldHide? 'none':'block'}} className={styles.CompLoader} data-testid="CompLoader">
         <div className={styles['overlay']}>
    <div className={styles['loader']}>
      <Loader
          type="Oval"
          color="#00BFFF"
          height={250}
          width={250}
           timeout={timeOut} //3 secs
        />
    </div>
    </div>
    </div>
  );
  
}

CompLoader.propTypes = {};

CompLoader.defaultProps = {};

export default CompLoader;
