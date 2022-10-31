import React from 'react'
import "./Card.css";

function Card({id, name, date, time, number }) {
    return ( 
        <div className='card-wrapper'>
            <h2 className='name'>{name}</h2>
            <h3 className='date'>{date}</h3>
            <h3 className='time'>{time}</h3>
            <h3 className='number'>{number}</h3>
            <button> Cancel </button>
        </div>
     );
}

export default Card;