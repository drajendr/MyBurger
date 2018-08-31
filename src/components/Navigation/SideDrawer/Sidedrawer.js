import React from 'react';
import Logo from '../../Logo/Logo';
import Navigationitems from '../NavigationItems/NavigationItems';
import Classes from './Sidedrawer.css';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Aux from '../../../hoc/Common/common';

const sideDrawer = ( props ) => {
    const sideDrawerClass = props.open ? [Classes.Sidedrawer, Classes.Open ].join(' ') : [Classes.Sidedrawer, Classes.Close ].join(' ');
    return(
        <Aux>
            <Backdrop show ={ props.open } clicked={ props.closed } />
            <div className = { sideDrawerClass }>
                <div className = { Classes.Logo }>
                    <Logo />
                </div>            
                <nav>
                    <Navigationitems />
                </nav>
            </div>
        </Aux>
    );
}

export default sideDrawer;