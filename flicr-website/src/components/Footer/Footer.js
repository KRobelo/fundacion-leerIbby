import React from "react";
import PropTypes from "prop-types";
import styles from "./Footer.module.scss";
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));
const Footer = () => {
  return (
    <div className={styles.Footer} data-testid="Footer">
       <Box sx={{ width: '100%' }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={6}>
          <Item>fundacion Ibby</Item>
        </Grid>
        <Grid item xs={6}>
          <Item>Contacto</Item>
        </Grid>
        
      </Grid>
    </Box>
    </div>
  );
};

Footer.propTypes = {};

Footer.defaultProps = {};

export default Footer;
