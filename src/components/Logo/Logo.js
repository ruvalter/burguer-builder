import React from 'react';
import burguerLogo from '../../assets/images/burger-logo.png';
import classes from './Logo.module.scss';

const logo = (props) => (
  <div className={classes.Logo}>
    <img src={burguerLogo} alt="app logo"/>
  </div>
);
 
export default logo;