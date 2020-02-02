import React from 'react';

const homeColumn = (props) => {
    return(
        <div className="column">
                <div className="column__number">{props.number}</div>
                <div className="column__title">{props.title}</div>
                <div className="column__description">{props.body}</div>
            </div>
    );
} 

export default homeColumn;