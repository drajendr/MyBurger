import React from 'react';
import Classes from './Logo.css';
import Logoimg from '../../assets/images/burger-logo.png';

const logo = () => (
    <div className={ Classes.Logo }>
        <img src={ Logoimg } alt='MyBurger' />
    </div>
);

export default logo;