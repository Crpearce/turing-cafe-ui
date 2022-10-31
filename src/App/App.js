import React, { Component } from "react";
import Reservations from "../Components/Reservations/Reservations";
import Form from "../Components/Form/Form";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      reservations: [],
      error: ''
    };
  }
  
  componentDidMount() {
    fetch("http://localhost:3001/api/v1/reservations")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error receiving Data");
        } else {
          return response.json();
        }
      })
      .then((data) => {
        this.setState({ reservations: data });
      })
      .catch((error) =>
        this.setState({ error: "Error loading page, please try again!" })
      );
  }

  addReservation = (newReservation) => {
    this.setState({ reservations: [...this.state.reservations, newReservation]})
  } 

  render() {
    return (
      <div className="App">
        <h1 className="app-title">Turing Cafe Reservations</h1>
        <div className="resy-form">
          <Form addReservation={this.addReservation}/>
        </div>
        <div className="resy-container">
          <Reservations resyData={this.state.reservations}/>
        </div>
      </div>
    );
  }
}

export default App;
