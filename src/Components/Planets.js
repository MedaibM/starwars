import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Planet from './Planet';

const getPlanets = async () => {
    const result = await fetch('https://swapi.py4e.com/api/planets/');
    return result.json();
}

function Planets() {
    const [planets, setPlanets] = useState([]);

    useEffect(() => {
        async function getData() {
            const res = await getPlanets();
            setPlanets(res.results);
        }
        getData();
    }, [])


    return (
        <div>
            <h1>Planets</h1>
            {
                planets.length > 0 &&
                planets.map(planet =>
                    <Planet
                        key={planet.name}
                        name={planet.name}
                        population={planet.population}
                        climate={planet.climate}
                    />
                )
            }
        </div>
    )
}

export default Planets