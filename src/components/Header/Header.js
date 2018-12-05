import React from 'react';

import Logo from '../../assets/Images/logo.png';

import Title  from './Title/Title';
import NavigationItems from './Navigation/NavigationItems';

import './Header.css';

const header = (props) => (
    <div>
        <header className="AppHeader">
            <img src={Logo} className="Logo" alt="logo"/>
             <Title />
             <NavigationItems  navItems={props.navLinks} />
        </header>
        
    </div>
);

export default header;