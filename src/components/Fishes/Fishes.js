import React, { useEffect, useState } from 'react';
import Fish from '../Fish/Fish';
import './Fish.css'

const Fishes = () => {
    const [fishes, setFishes] = useState([]);
    useEffect(() => {
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=fish')
        .then(res => res.json())
        .then(data =>setFishes(data.meals))
    }, [])
    return (
        <div className="fishes-container">
            {
                fishes.map(fish =><Fish key={fish.idMeal} fish={fish}></Fish>)
            }
        </div>
    );
};

export default Fishes;