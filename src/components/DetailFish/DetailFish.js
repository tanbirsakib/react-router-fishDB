import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import './DetailFish.css'

const DetailFish = () => {
    const {fishId} = useParams();
    const [details, setDetails] = useState({})
    const history = useHistory();
    const handleBtn = () => {
        history.push('/fishes')
    }
    // url for fetch data 
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${fishId}`
   useEffect(() => {
       fetch(url)
       .then(res => res.json())
       .then(data => setDetails(data.meals[0]))
   } ,[]);
//    destructuring object of fish 
   const {strMeal, strCategory,strMealThumb,strInstructions} = details;
    return (
        <div className='detail'>
            <h1>Details of {strMeal}</h1>
            <img src={strMealThumb} alt="" />
            <h2>Category : {strCategory}</h2>
            <p className="instruction">{strInstructions}</p>
            <br />
            <button className="btn-to-fishes" onClick={handleBtn}>See All Fishes</button>
        </div>
    );
};

export default DetailFish;