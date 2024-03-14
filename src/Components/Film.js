import React from 'react'

function Film(props) {
    return (
        <div className='card'>
            <h3>{props.title}</h3>
            <p> Director - {props.director}</p>
            <p> Date - {props.created}</p>
        </div>
    )
}

export default Film