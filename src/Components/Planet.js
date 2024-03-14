import React from 'react'

function Planet(props) {
    return (
        <div className="card">
            <h3>{props.name}</h3>
            <p>Population - {props.population} </p>
            <p>Climate - {props.climate}</p>
        </div>
    )
}

export default Planet