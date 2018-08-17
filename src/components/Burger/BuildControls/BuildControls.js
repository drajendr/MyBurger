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
        </div>
    );
}

export default buildControls;