import React from "react";
import PropTypes from "prop-types";
import styles from "./CompSubHeader.module.scss";

const CompSubHeader = () => (
  <div className={styles.CompSubHeader} data-testid="CompSubHeader">
    <div
      className={styles["bg-row-small"]}
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
    <br /> <br /> <br />
  </div>
);

CompSubHeader.propTypes = {};

CompSubHeader.defaultProps = {};

export default CompSubHeader;
