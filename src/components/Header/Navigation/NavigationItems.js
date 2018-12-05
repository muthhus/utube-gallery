import React from 'react';

import { Nav } from 'reactstrap';

import NavigationItem from "./NavigationItem/NavigationItem";

const navigationItems = (props) => (
    <Nav>
        {props.navItems.map((lnk, index) => {
            return <NavigationItem link={lnk} key={index} active/>
        })}
    </Nav>
);

export default navigationItems;