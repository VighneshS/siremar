import React, { Component } from 'react';
import './auth.css'

class Register extends Component {
    state = {  } 
    render() { 
        return (
            <div class="container">

                <div class="col-100">
                    <label for="emailid"><b>Email ID</b></label>
                    <input type="text" placeholder="" name="emailid" required />
                </div>

                <div class="col-50">
                    <label for="fname"><b>First Name</b></label>
                    <input type="text" placeholder="" name="fname" required />
                </div>
                <div class="col-50">
                    <label for="lname"><b>Last Name</b></label>
                    <input type="text" placeholder="" name="lname" required />
                </div>
                <div class="col-50">
                    <label for="dob"><b>Date of Birth</b></label>
                    <input type="date" id="birthday" name="dob" />
                </div>
                <div class="col-50">
                    <label for="bplace"><b>Birth Place</b></label>
                    <select name="cars" id="cars">
                        <option value="siremar">Siremar</option>
                        <option value="other">Other</option>
                    </select>
                </div>
                <div class="col-50">
                    <label for="bplace"><b>Address #1</b></label>
                    <input type="text" placeholder="" name="address1" required />
                </div>
                <div class="col-25">
                    <label for="bplace"><b>Apt Number</b></label>
                    <input type="number" placeholder="" name="aptno" required />
                </div>
                <div class="col-25">
                    <label for="bplace"><b>ZIP Code</b></label>
                    <input type="number" placeholder="" name="zipcode" required />
                </div>
                <div class="col-100">
                    <label for="bplace"><b>Proof</b></label>
                    <input type="file" id="myFile" name="filename" required />
                </div>
                <div class="col-100">
                    <label for="bplace"><b>Password</b></label>
                    <input type="password" placeholder="" name="psw" required />
                </div>
                <div class="col-100">
                    <label for="bplace"><b>Retype Password</b></label>
                    <input type="password" placeholder=" " name="rpsw" required />
                </div>
                <div class="col-50">
                    <button type="submit">Register</button>
                </div>
                <div class="col-50">
                    <button type="button">Cancel</button>
                </div>
            </div>
        );
    }
}
 
export default Register;