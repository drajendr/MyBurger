import React from 'react';
import Classes from './Backdrop.css';

const backDrop = ( props ) => {
    return(
        props.show ? <div className = { Classes.Backdrop } onClick = { props.clicked }></div> : null
    );
};

export default backDrop;