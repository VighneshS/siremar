import React, { Component } from 'react';

import './registerout.css'

class RegisterOut extends Component {
    state = {  } 
    render() { 
        return (
            <div class="container">
                <h2>Register Move Out</h2>
                <div class="col-50">
                    <label for="dob"><b>Date of Move Out</b></label>
                    <input type="date" name="dot" />
                </div>
                <div class="col-100">
                    <label for="reason"><b>Reason</b></label>
                    <textarea name="reson" rows="4" cols="50" />
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
 
export default RegisterOut;