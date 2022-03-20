import './App.css';
import NavBar from "./componets/NavBar/NavBar";
import ApproveRegistrations from "./componets/ApproveRegistrations/ApproveRegistrations";
import Register from './componets/Auth/Register';
import Login from './componets/Auth/Login'
import UserDashboard from './pages/UserDashboard/UserDashboard';
import UserProfile from './pages/UserProfile/UserProfile';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
    return (
        <Router>
            <NavBar />
            <Routes>                
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/approve-registration" element={<ApproveRegistrations />} />
                <Route path='/user-dashboard' element={<UserDashboard />} />
                <Route path='/user-profile' element={<UserProfile />} />
            </Routes>
        </Router>
    );
}

export default App;
