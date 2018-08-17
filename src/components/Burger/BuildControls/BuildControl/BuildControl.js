import React from 'react';
import Classes from './BuildControl.css';

const buildControl = ( props ) => {
    //console.log(props.disabled)
    return(        
        <div className={Classes.BuildControl}>
            <div className={Classes.Label}>{props.lblContorl}</div>
            <button className={Classes.Less} onClick={props.removeIngredient} disabled={ props.disabled } >Less</button>
            <button className={Classes.More} onClick = {props.addIngredient}>More</button>
        </div>
    );
}

export default buildControl;