import './App.css';
import RegisterOut from './componets/Moveout/RegisterOut';
import NavBar from "./componets/NavBar/NavBar";
import BookFlights from './componets/Flight/BookFlights';
import ApproveRegistrations from "./componets/ApproveRegistrations/ApproveRegistrations";
import Register from './componets/Auth/Register';
import Login from './componets/Auth/Login'
import BookFerry from './componets/Ferry/BookFerry';
import BookApts from './componets/Appointments/BookApts';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
    return (
        <Router>
            <NavBar />
            <Routes>                
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/approve-registration" element={<ApproveRegistrations />} />
            </Routes>
        </Router>
    );
}

export default App;
