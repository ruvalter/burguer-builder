import React from 'react';
import Aux from '../../hoc/AuxWrap';

import './layout.scss'

const layout = (props) => (
  <Aux>
    <div className="content">Toolbar, SideDrawer, Backdrop.</div>
    <main>
      {props.children}
    </main>
  </Aux>
);

export default layout;