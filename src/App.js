import './App.css';
import RegisterOut from './componets/Moveout/RegisterOut';
import NavBar from "./componets/NavBar/NavBar";
import BookFlights from './componets/Flight/BookFlights';
import ApproveRegistrations from "./componets/ApproveRegistrations/ApproveRegistrations";
import Register from './componets/Auth/Register';
import Login from './componets/Auth/Login'
import BookFerry from './componets/Ferry/BookFerry';
import BookApts from './componets/Appointments/BookApts';

function App() {
    return (
        <div className="App">
            <NavBar/>
            {/* <Register /> */}
            {/* <Login /> */}
            {/* <BookFerry /> */}
            {/* <BookFlights /> */}
            {/* < RegisterOut /> */}
            {/* <ApproveRegistrations/>*/}
            {/*<BookApts />*/}
        </div>
    );
}

export default App;
