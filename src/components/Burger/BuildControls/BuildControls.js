import React from 'react';
import Classes from './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';

const control = [
    {label:'Salad',type:'salad'},
    {label:'Cheese',type:'cheese'},
    {label:'Bacon',type:'bacon'},
    {label:'Meat',type:'meat'}
];

const buildControls = ( props ) => {
    
    return (
        <div className={Classes.BuildControls}>
        <p><strong>Burger Price : ${ props.BurgerPrice.toFixed(2) }</strong></p>
            {
                control.map(ctrl => {                    
                    return <BuildControl
                                key={ctrl.label} 
                                lblContorl={ctrl.label} 
                                addIngredient = { () => props.addIngredient(ctrl.type) }
                                removeIngredient = { () => props.removeIngredient(ctrl.type) }
                                disabled = { props.disabled[ctrl.type] }
                            />;
                })
            }
            <button 
                className = { Classes.OrderButton } 
                disabled = { props.orderDisable }
                onClick = { props.purchasing }
            >ORDER NOW</button>
        </div>
    );
}

export default buildControls;