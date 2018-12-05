import React from 'react';

import Aux from '../../hoc/Aux';
import Header from '../Header/Header';
import classes from './Layout.css';


const layout = (props) => (
    <Aux>
        <Header navLinks={props.navs} />
        <main className={classes.Content}>
            {props.children}
        </main>
    </Aux>
);
export default layout;