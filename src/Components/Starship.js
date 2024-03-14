import React from 'react'

function starship(props) {
    return (<div className="card" >
        <h3>{props.name}</h3>
        <p> model- {props.model}</p>
        <p> starship class - {props.starship_class}</p>
    </div>
    )
}

export default starship