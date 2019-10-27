import React from 'react';

import './BuildControls.scss';
import BuildControl from './BuildControl/BuildControl';

const controls = [
  { label: 'Salad', type: 'salad' },
  { label: 'Cheese', type: 'cheese' },
  { label: 'Bacon', type: 'bacon' },
  { label: 'Meat', type: 'meat' }
];

const buildControls = (props) => (
  <div className="BuildControls">
    <p>Total Price: <strong>{props.price.toFixed(2)}</strong></p>
    {controls.map(ctrl => {
      return <BuildControl 
        added={() => props.ingredientAdded(ctrl.type)}
        removed={() => props.ingredientRemoved(ctrl.type)}
        key={ctrl.label} 
        label={ctrl.label} 
        disabled={props.disabled[ctrl.type]} />
    })}
    <button 
      type="button" 
      className="OrderButton"
      onClick={props.ordered}
      disabled={!props.purchasable}>ORDER NOW</button>
  </div>
);

export default buildControls;