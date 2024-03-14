import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Starship from './Starship';

const getStarships = async () => {
    const result = await fetch('https://swapi.py4e.com/api/starships');
    return result.json();
}

function Starships() {
    const [starships, setstarships] = useState([]);

    useEffect(() => {
        async function getData() {
            const res = await getStarships();
            setstarships(res.results)
            console.log(res.results);
        }
        getData();
    }, [])

    return (
        <div>
            <h1>Starships</h1>
            {
                starships.length > 0 &&
                starships.map(starship =>
                    <Starship
                        key={starship.name}
                        name={starship.name}
                        model={starship.model}
                        starship_class={starship.starship_class}
                    />
                )
            }
        </div>
    )
}


export default Starships