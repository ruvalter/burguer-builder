import React from 'react';
import Aux from '../../..//hoc/AuxWrap';

const orderSummary = (props) => { // Add curly braces when there is more than just JXS;
  const ingredientsSummary = Object.keys(props.ingredients)
    .map(igKey => {
      return  (
        <li key={igKey}>
          <span style={{textTransform: 'captalize'}}>{igKey}:</span>{props.ingredients[igKey]}
        </li>
      )
    });

  return (
    <Aux>
      <h3>Your Order</h3>
      <p>A delicious burger with the following ingredients:</p>
      <ul>
       {ingredientsSummary}
      </ul>
      <p>Continue to checkout?</p>
    </Aux>
  )
};

export default orderSummary;