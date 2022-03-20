import './App.css';
import NavBar from "./componets/NavBar/NavBar";
import Chat from "./componets/Chat/Chat";
import ApproveRegistrations from "./componets/ApproveRegistrations/ApproveRegistrations";
import Register from './componets/Auth/Register';
import Login from './componets/Auth/Login'

import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import AdminDashboard from "./componets/AdminDashboard/AdminDashboard";
import AboutUs from "./componets/AboutUs/AboutUs";

function App() {
    return (
        <Router>
            <NavBar/>
            <Chat/>
            <Routes>
                <Route path="/login" element={<Login/>}/>
                <Route path="/register" element={<Register/>}/>
                <Route path="/approve-registration" element={<ApproveRegistrations/>}/>
                <Route path="/admin/dashboard" element={<AdminDashboard/>}/>
                <Route path="/about" element={<AboutUs/>}/>
            </Routes>
        </Router>
)
    ;
}

export default App;
