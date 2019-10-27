import React from 'react';
import classes from './NavigationItems.module.scss';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = () => (
  <ul className={classes.navigationItems}>
    <NavigationItem link="/" active>Burguer Builder</NavigationItem>
    <NavigationItem link="/">Checkout</NavigationItem>
  </ul>
)
 
export default navigationItems;