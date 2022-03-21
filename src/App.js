import './App.css';

import NavBar from "./componets/NavBar/NavBar";
import Chat from "./componets/Chat/Chat";
import ApproveRegistrations from "./componets/ApproveRegistrations/ApproveRegistrations";
import Register from './componets/Auth/Register';
import Login from './componets/Auth/Login'
import UserDashboard from './pages/UserDashboard/UserDashboard';
import UserProfile from './pages/UserProfile/UserProfile';
import InspecDashboard from './pages/InspecDashboard/InspecDashboard';

import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import AdminDashboard from "./componets/AdminDashboard/AdminDashboard";
import AboutUs from "./componets/AboutUs/AboutUs";
import ContactUs from './componets/ContactUs/ContactUs';
import LandingPage from './pages/LandingPage/LandingPage';

function App() {
    return (
        <Router>
            <NavBar/>
            <Chat/>
            <Routes>       
                <Route path="/" element={<LandingPage />}/>
                <Route path="/user/login" element={<Login/>}/>
                <Route path="/inspector/login" element={<Login/>}/>
                <Route path="/admin/login" element={<Login/>}/>
                <Route path="/user/register" element={<Register/>}/>
                <Route path="/inspector/register" element={<Register/>}/>
                <Route path="/approve-registration" element={<ApproveRegistrations/>}/>
                <Route path="/admin/dashboard" element={<AdminDashboard/>}/>
                {/* <Route path="/about" element={<AboutUs/>}/> */}
                <Route path='/user/dashboard' element={<UserDashboard />} />
                <Route path='/user/profile' element={<UserProfile />} />
                <Route path='/inspector/dashboard' element={<InspecDashboard />} />
                {/* <Route path='/contact' element={<ContactUs />} /> */}
            </Routes>
        </Router>
)
    ;
}

export default App;
