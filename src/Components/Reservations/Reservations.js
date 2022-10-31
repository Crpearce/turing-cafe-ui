import React from "react";
import Card from "../Card/Card";
import "./Reservations.css";

function Reservations(props) {
  console.log(props);
  const allReservations = props.resyData.map((reservation) => {
    return <Card 
    id={reservation.id}
    key={reservation.id}
    name={reservation.name}
    date={reservation.date}
    time={reservation.time}
    number={reservation.number}
    />;
  });

  return (
    <div className='all-cards'>
      <h1>{allReservations}</h1>
    </div>
  );
}

export default Reservations;