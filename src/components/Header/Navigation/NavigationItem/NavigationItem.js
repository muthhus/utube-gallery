import React from 'react';
import { NavItem, NavLink } from 'reactstrap';
import classes from './NavigationItem.css';

import Videos from '../../../Static/Videos';

const navigationItem = (props) => (
    <NavItem className={classes.NavigationItem}>
        <NavLink 
            href={props.link} component={Videos}
            className={props.active ? classes.active : null}>
            {props.link}
        </NavLink>
    </NavItem>
);
    

export default navigationItem;