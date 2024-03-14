import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Film from './Film';


const getFilms = async () => {
    const result = await fetch('https://swapi.py4e.com/api/films/');
    return result.json();
}

function Films() {
    const [films, setFilms] = useState([]);

    useEffect(() => {
        async function getData() {
            const res = await getFilms();
            setFilms(res.results);
            console.log(res.results);
        }
        getData();
    }, [])

    return (
        <div>
            <h1>Films</h1>
            {
                films.length > 0 &&
                films.map(film =>
                    <Film
                        key={film.title}
                        title={film.title}
                        director={film.director}
                        date={film.created}
                    />
                )
            }
        </div>
    )
}

export default Films