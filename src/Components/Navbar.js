import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <nav>
            <Link to="/planets" >
                <button>
                    PLANETS
                </button>
            </Link>
            <Link to="/People" >
                <button>
                    PEOPLE
                </button>
            </Link>
            <Link to="/Films">
                <button>
                    FILMS
                </button>
            </Link>
            <Link to="/Starships">
                <button>
                    STARSHIPS
                </button>
            </Link>
        </nav >
    )
}

export default Navbar