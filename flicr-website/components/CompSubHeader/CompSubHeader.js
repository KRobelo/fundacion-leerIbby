import React from "react";
import PropTypes from "prop-types";
import styles from "./CompSubHeader.module.scss";

const CompSubHeader = () => {
  let rmdNumber = Math.floor(Math.random() * 3);
  let url = "";
  switch (rmdNumber) {
    case 0:
      url = "/images/quehacemos.png";
      break;
    case 1:
      url = "/images/proyectos.png";
      break;
    default:
      url = "/images/quienssomos.png";
      break;
  }
  return (
    <div className={styles.CompSubHeader} data-testid="CompSubHeader">
      <div
        className={styles["bg-row-small"]}
        style={{
          margin: "auto",
          textAlign: "center",
        }}
      >
        <img src={url} className={styles["round-image-small"]}></img>
      </div>
      <br />
    </div>
  );
};
CompSubHeader.propTypes = {};

CompSubHeader.defaultProps = {};

export default CompSubHeader;
