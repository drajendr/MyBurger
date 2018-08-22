import React from 'react';
import Classes from './NavigationItems.css';
import Navigationitem from './NavigationItem/NavigationItem';

const navigationItems = () => (
    <ul className={ Classes.NavigationItems } >
        <Navigationitem active link='\'> Burger builder </Navigationitem>
        <Navigationitem  link='\' > Checkout </Navigationitem>
    </ul>
);

export default navigationItems;