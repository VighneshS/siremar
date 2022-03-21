import './App.css';
import RegisterOut from './componets/Moveout/RegisterOut';
import NavBar from "./componets/NavBar/NavBar";
import Chat from "./componets/Chat/Chat";
import ApproveRegistrations from "./componets/ApproveRegistrations/ApproveRegistrations";
import Register from './componets/Auth/Register';
import Login from './componets/Auth/Login'
import BookFerry from './componets/Ferry/BookFerry';
import BookApts from './componets/Appointments/BookApts';
import UserDashboard from './pages/UserDashboard/UserDashboard';
import UserProfile from './pages/UserProfile/UserProfile';
import InspecDashboard from './pages/InspecDashboard/InspecDashboard';

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
                <Route path='/user/dashboard' element={<UserDashboard />} />
                <Route path='/user-profile' element={<UserProfile />} />
                <Route path='/inspector/dashboard' element={<InspecDashboard />} />
            </Routes>
        </Router>
)
    ;
}

export default App;
