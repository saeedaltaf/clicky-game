import React from 'react';
import "./Image.css"

const Image = props => (
    <div className="imageCard">
        <div className="img-container">
            <img onClick={() => props.sortImages(props.id, props.clicked)}
                id={props.id}
                src={props.src}
                data-clicked={props.clicked}
                alt="PImage" />
        </div>
    </div>

);

export default Image;