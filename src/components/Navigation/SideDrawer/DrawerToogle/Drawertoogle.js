import React from 'react';
import Classes from './Drawertoogle.css';

const toogleDrawer = (  props ) => (
    <div 
        className={ Classes.DrawerToggle }
        onClick={ props.toogleClick }   
    >
        <div></div>
        <div></div>
        <div></div>
    </div>
);

export default toogleDrawer;