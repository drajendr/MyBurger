import React from 'react';
import Classes from './Toolbar.css';
import Logo from '../../Logo/Logo';
import Navigationitems from '../NavigationItems/NavigationItems';
import Toogledrawer from '../SideDrawer/DrawerToogle/Drawertoogle';

const toolBar = ( props ) => (
   <header className={ Classes.Toolbar }>
        <Toogledrawer toogleClick = { props.clickToogle } />
        <div className = { Classes.Logo }>
            <Logo />
        </div>       
        <nav className = { Classes.DesktopOnly }>
           <Navigationitems />
        </nav>
   </header> 
);

export default toolBar;