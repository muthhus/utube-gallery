import React from 'react';

import Aux from '../../hoc/Aux';
import  './Gallery.css';

const gallery = (props) => {
    return (
        <Aux>
            <div className="Gallery">
                <p onClick={props.getTitle}>Title: {props.title}</p>
                <p>Description: {props.description}</p>
                <p>{props.children}</p>
                <p>Rating: {props.rating} <input type="text" onChange={props.review} value={props.rating} /></p>
            </div>
        </Aux>
        
    )
};

export default gallery;