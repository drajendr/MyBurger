import React from 'react';
import Aux from '../../../hoc/common';
import Button from '../../UI/Button/Button';

const orderSummary = ( props ) => {
    const ingredientsAdded = Object.keys( props.ingredients )
            .map( igKey => {
                return props.ingredients[igKey] <= 0 ? null : <li key={igKey} style={ {textTransform : 'capitalize'} } > {igKey} - { props.ingredients[igKey] } </li>
            } )
    return(
        <Aux>
            <h3>Your Order</h3>
            <p>A delicious burger with the following ingredients:</p>
            <ul>
                { ingredientsAdded }
            </ul>
            <p>continue to checkout</p>
            <Button btnType='Danger' clicked = { props.cancel }> CANCEL </Button>
            <Button btnType='Success' clicked = { props.purchaseContinue }> CONTINUE </Button>
        </Aux>
    );
};

export default orderSummary;