import './App.css';
import Chat from "./componets/Chat/Chat";
import ApproveRegistrations from "./componets/ApproveRegistrations/ApproveRegistrations";
import Register from './componets/Auth/Register';
import Login from './componets/Auth/Login'
import UserDashboard from './pages/UserDashboard/UserDashboard';
import UserProfile from './pages/UserProfile/UserProfile';
import InspecDashboard from './pages/InspecDashboard/InspecDashboard';

import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import AdminDashboard from "./componets/AdminDashboard/AdminDashboard";
import LandingPage from './pages/LandingPage/LandingPage';
import axios from "axios";

export const endPoints = {
    addflights: `addflights.php`,
    approveuser: `approveuser.php`,
    createuser: `createuser.php`,
    getcouponrate: `getcouponrate.php`,
    getflights: `getflights.php`,
    getprofile: `getprofile.php`,
    login: `user/signin`,
    register: `createuser.php`,
    addDiscount: `add_discount.php`,
    addEvents: `addevents.php`,
    approveMoveout: `approve_moveout.php`,
    bookevents: `bookevents.php`,
    bookflights: `bookflights.php`,
    booktickets: `booktickets.php`,
    displayDiscounts: `display_discounts.php`,
    displayAllDiscount: `inspector/discounts-all`,
    deleteDiscount: `inspector/deletediscount`,
    getUsers: `get_users.php`,
    getBookedevents: `get_bookedevents.php`,
    getmoveOuts: `getmove_outs.php`,
    gettickets: `gettickets.php`,
    get_user_appointments: `get_user_appointments.php`,
    blog: `https://siremar.blog.vxs8596.uta.cloud/`
}

// export const WS_HOST = "ws://localhost:9000"
export const WS_HOST = process.env.REACT_APP_SIREMAR_WEB_SOCKET
export const NEW_CHAT_MESSAGE_EVENT = "chat message"
export const TYPING_CHAT_MESSAGE_EVENT = "typing"
export const USERS_EVENT = "users"

export const api = axios.create({
    // baseURL: `http://localhost/`
    // baseURL: `https://siremar.api.vxs8596.uta.cloud/`
    baseURL: process.env.REACT_APP_SIREMAR_API_PHP
})
console.log(process.env.REACT_APP_SIREMAR_API_LARAVEL);

export const apiLaravel = axios.create({
    // baseURL: `http://3.145.17.236/api/`
    // baseURL: `http://localhost:8000/api/`
    // baseURL: `https://siremar.api.vxs8596.uta.cloud/`
    baseURL: process.env.REACT_APP_SIREMAR_API_LARAVEL
})

function App() {
    return (
        <Router>
            {/* <NavBar/> */}
            <Chat/>
            <Routes>
                <Route path="/" element={<LandingPage/>}/>
                <Route path="/user/login" element={<Login/>}/>
                <Route path="/inspector/login" element={<Login/>}/>
                <Route path="/admin/login" element={<Login/>}/>
                <Route path="/user/register" element={<Register/>}/>
                <Route path="/inspector/register" element={<Register/>}/>
                <Route path="/approve-registration" element={<ApproveRegistrations/>}/>
                <Route path="/admin/dashboard" element={<AdminDashboard/>}/>
                <Route path="/admin/services" element={<InspecDashboard/>}/>
                {/* <Route path="/about" element={<AboutUs/>}/> */}
                <Route path='/user/dashboard' element={<UserDashboard/>}/>
                <Route path='/user-profile' element={<UserProfile/>}/>
                <Route path='/inspector/dashboard' element={<InspecDashboard/>}/>
                {/* <Route path='/contact' element={<ContactUs />} /> */}
            </Routes>
        </Router>
    );
}

export default App;
