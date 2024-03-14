import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Person from './Person';

const getPeople = async () => {
    const result = await fetch('https://swapi.py4e.com/api/people');
    return result.json();
}

function People() {
    const [people, setPeople] = useState([]);

    useEffect(() => {
        async function getData() {
            const res = await getPeople();
            setPeople(res.results)
            console.log(res.results);
        }
        getData();
    }, [])

    return (
        <div>
            <h1>People</h1>
            {
                people.length > 0 &&
                people.map(person =>
                    <Person
                        key={person.name}
                        name={person.name}
                        birth_year={person.birth_year}
                        gender={person.gender}
                    />
                )
            }
        </div>
    )
}

export default People