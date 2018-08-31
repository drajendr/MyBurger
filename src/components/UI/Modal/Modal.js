import React, { Component } from 'react';
import Classes from './Modal.css';
import Aux from '../../../hoc/Common/common';
import BackDrop from '../Backdrop/Backdrop';

class modal extends Component {

    shouldComponentUpdate(nextProps,nextState){  
         return nextProps.show !== this.props.show || nextProps.children !== this.props.children;
    }

    render(){   
             
        return(
            <Aux>
                <BackDrop show = { this.props.show } clicked = { this.props.modalClosed } />
                <div 
                    className={ Classes.Modal } 
                    style = {
                        {
                            transform: this.props.show ? 'translateY(0)' : 'translate(-100vh)',
                            opacity: this.props.show ? '1' : '0'
                        }
                    }
                >
                    { this.props.children }
                </div>
            </Aux>
        );
    }
} 

export default modal;