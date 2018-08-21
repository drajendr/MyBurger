import React from 'react';
import Classes from './Modal.css';
import Aux from '../../../hoc/common';
import BackDrop from '../Backdrop/Backdrop';

const modal = ( props ) => {
    return(
        <Aux>
            <BackDrop show = { props.show } clicked = { props.modalClosed } />
            <div 
                className={ Classes.Modal } 
                style = {
                    {
                        transform: props.show ? 'translateY(0)' : 'translate(-100vh)',
                        opacity: props.show ? '1' : '0'
                    }
                }
            >
                { props.children }
            </div>
        </Aux>
    );
};

export default modal;