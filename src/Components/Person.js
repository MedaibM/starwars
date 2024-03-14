import React from 'react'

function Person(props) {
    return (
        <div className="card" >
            <h3>{props.name}</h3>
            <p> birth Year - {props.birth_year}</p>
            <p> gender - {props.gender}</p>
        </div>
    )
}

export default Person