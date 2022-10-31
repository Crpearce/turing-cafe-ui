import React from 'react'
import "./Card.css";

function Card({id, name, date, time, number }) {
    return ( 
        <div className='card'>
            <h2>{name}</h2>
            <h3>{date}</h3>
            <h3>{time}</h3>
            <h3>{number}</h3>
            <button> Cancel </button>
        </div>
     );
}

export default Card;