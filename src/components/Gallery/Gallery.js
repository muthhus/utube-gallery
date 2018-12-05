import React from 'react';

import Aux from '../../hoc/Aux';
import  './Gallery.css';

const gallery = (props) => {
    return (
        <Aux>
            <div className="Gallery">
                <p onClick={props.clicked}>Title: {props.title}</p>
                <p>Description: {props.description}</p>
                <p>{props.children}</p>
                <p>Rating: {props.rating}</p>
                <hr/>
            </div>
        </Aux>
        
    )
};

export default gallery;