import React from 'react';
import Aux from '../../hoc/AuxWrap';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

import classes from './Layout.module.scss'
import Toolbar from '../Navigation/Toolbar/Toobar';

const layout = (props) => (
  <Aux>
    <Toolbar />
    <SideDrawer />
    <main className={classes.content}>
      {props.children}
    </main>
  </Aux>
);

export default layout;