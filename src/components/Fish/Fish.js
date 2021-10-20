import React from 'react';
import { Link } from 'react-router-dom';
import './Fish.css'

const Fish = (props) => {
    const{strMeal, strCategory,strMealThumb, idMeal} = props.fish;
    const url = `/fish/${idMeal}`
    return (
        <div className="fish-card">
            <h2>{strMeal}</h2>
            <h5>{strCategory}</h5>
            <img src={strMealThumb} alt="" />
            <br />
            <Link className="meal-detail-link" to={url}>See Details</Link>

        </div>
    );
};

export default Fish;