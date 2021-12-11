import * as React from "react";
import IconButton from "@mui/material/IconButton";
import styles from "./CompSocialMedia.module.scss";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";

const CompSocialMedia = () => {
  return (
    <div
      className={styles.CompSocialMedia}
      style={{ margin: "auto" }}
      data-testid="CompSocialMedia"
    >
      <div
        style={{
          margin: "auto",
          textAlign: "center",
          alignItems: "space-between",
        }}
      >
        <IconButton
          disableFocusRipple
          disableRipple
          className={styles["social-media-icons-mobile"]}
          href={
            "https://www.facebook.com/Fundaci%C3%B3n-Leer-IBBY-Costa-Rica-133173946851807"
          }
          target={"_blank"}
          sx={{ p: 0 }}
        >
          <FacebookIcon /> &nbsp;&nbsp;
        </IconButton>
        <IconButton
          disableFocusRipple
          disableRipple
          className={styles["social-media-icons-mobile"]}
          href={"https://www.instagram.com/fundacionleercostarica/"}
          target={"_blank"}
          sx={{ p: 0 }}
        >
          <InstagramIcon /> &nbsp;&nbsp;
        </IconButton>
        <IconButton
          disableFocusRipple
          disableRipple
          className={styles["social-media-icons-mobile"]}
          href={"https://www.youtube.com/channel/UCk7gCO5QZnbHceW6D74mZLQ"}
          target={"_blank"}
          sx={{ p: 0 }}
        >
          <YouTubeIcon />
        </IconButton>
      </div>
    </div>
  );
};
export default CompSocialMedia;
