import React, { Component } from "react";

class Form extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      date: "",
      time: "",
      number: "",
      error: ""
    };
  }

  handleChange = (event) => {
    const{ name, value } = event.target;
    this.setState({
        [name] : value
    })
  }

  submitReservation = (event) => {
    event.preventDefault();

    if(!this.state.name || !this.state.date || !this.state.time || !this.state.number) {    
        return this.setState({error: "Please make sure all fields have been entered to make reservation"})
    }
    const newReservation = {
        id: Date.now(), 
        ...this.state
    }
    this.props.addReservation(newReservation);
    this.clearForm();
  }
  clearForm =() => {
    this.setState({
        name: '',
        date:'',
        time: "",
        number:""
    })
  }

  render() {
    return (
      <form>
        <input
          type="text"
          placeholder="Name"
          name="name"
          value={this.state.name}
          onChange={event => this.handleChange(event)}
        />
        <input
          type="text"
          placeholder="Date (mm/dd)"
          name="date"
          value={this.state.date}
          onChange={event => this.handleChange(event)}
        />
        <input
          type="text"
          placeholder="Time"
          name="time"
          value={this.state.time}
          onChange={event => this.handleChange(event)}
        />
        <input
          type="number"
          placeholder="Number of guests"
          name="number"
          value={this.state.number}
          onChange={event => this.handleChange(event)}
        />
        <button className='submit-reservation' onClick={event => this.submitReservation(event)}> Make Reservation </button>
      </form>
    );
  }
}

export default Form;