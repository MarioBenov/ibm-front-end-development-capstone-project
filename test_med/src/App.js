import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar/Navbar';
import Landing_Page from './Components/Landing_Page/LandingPage'
import Sign_Up from './Components/Sign_Up/Sign_Up'
import Login from './Components/Login/Login'
import InstantConsultation from './Components/InstantConsultationBooking/InstantConsultation'
import Notification from "./Components/Notification/Notification";
import BookingConsultation from "./Components/BookingConsultation/BookingConsultation";
import ReviewForm from "./Components/ReviewForm/ReviewForm";
import ProfileForm from "./Components/ProfileForm/ProfileForm";
import ReportsLayout from "./Components/ReportsLayout/ReportsLayout";

function App() {
  return (
    <div className="App">
        {/* Set up BrowserRouter for routing */}
        <BrowserRouter>
          {/* Display the Navbar component */}
          <Navbar/>

          {/* Set up the Routes for different pages */}
          
          <Notification>
            <Routes>
                {/* Define individual Route components for different pages */}
                <Route path="/" element={<Landing_Page/>}/>
                <Route path="/signup" element={<Sign_Up/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/instant-consultation" element={<InstantConsultation />} />
                <Route path="/consultation" element={<BookingConsultation />} />
                <Route path="/reviews" element={<ReviewForm />} />
                <Route path="/edit-profile" element={<ProfileForm />} />
                <Route path="/reports" element={<ReportsLayout />} />
            </Routes>
          </Notification>
        </BrowserRouter>
    </div>
  );
}


export default App;
