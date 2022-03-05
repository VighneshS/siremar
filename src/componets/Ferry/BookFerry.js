import React, { Component } from 'react';
import './ferry.css'

class BookFerry extends React.Component {
    state = {  } 
    render() { 
        return (
            <div class="container">
                <h2>SIREMAR Ferry Booking</h2>
                <div class="col-50">
                    <label for="bplace"><b>Ferry Name</b></label>
                    <select>
                        <option value="ABC Ferry">ABC Ferry</option>
                        <option value="XYZ Ferry">XYZ Ferry</option>
                    </select>
                </div>
                <div class="col-50">
                    <label for="bplace"><b>Destination</b></label>
                    <select>
                        <option value="Siremar Dock A">Siremar Dock A</option>
                        <option value="Siremar Dock B">Siremar Dock B</option>
                        <option value="Siremar Dock C">Siremar Dock C</option>
                        <option value="Siremar Dock D">Siremar Dock D</option>
                    </select>
                </div>
                <div class="col-50">
                    <label for="dob"><b>Date of Travel</b></label>
                    <input type="date" name="dot" />
                </div>
                <div class="col-25">
                    <label for="bplace"><b>Departure Time</b></label>
                    <select>
                        <option value="09:00">09:00</option>
                        <option value="12:00">12:00</option>
                        <option value="14:00">14:00</option>
                        <option value="19:00">19:00</option>
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
 
export default BookFerry;