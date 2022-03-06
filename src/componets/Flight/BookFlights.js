import React, { Component } from 'react';
import './flights.css'

class BookFlights extends Component {
    state = {  } 
    render() { 
        return (
            <div class="container">
                <h2>SIREMAR Flight Booking</h2>
                <div class="col-50">
                    <label for="flight-name"><b>Flight Name</b></label>
                    <select>
                        <option value="ABC Airlines">ABC Airlines</option>
                        <option value="XYZ Airlines">XYZ Airlines</option>
                    </select>
                </div>
                <div class="col-50">
                    <label for="destination"><b>Destination</b></label>
                    <select>
                        <option value="Siremar Airport North">Siremar Airport North</option>
                        <option value="Siremar Airport South">Siremar Airport South</option>
                        <option value="Siremar Airport East">Siremar Airport East</option>
                        <option value="Siremar Airport West">Siremar Airport West</option>
                    </select>
                </div>
                <div class="col-50">
                    <label for="dob"><b>Date of Travel</b></label>
                    <input type="date" name="dot" />
                </div>
                <div class="col-25">
                    <label for="dep-time"><b>Departure Time</b></label>
                    <select>
                        <option value="09:00">09:00</option>
                        <option value="11:00">11:00</option>
                        <option value="13:00">13:00</option>
                        <option value="16:00">16:00</option>
                        <option value="20:00">20:00</option>
                        <option value="21:30">21:30</option>
                    </select>
                </div>
                <div class="col-50">
                    <button type="submit">Submit</button>
                </div>
                <div class="col-50">
                    <button type="button">Cancel</button>
                </div>
            </div>
        );
    }
}
 
export default BookFlights;