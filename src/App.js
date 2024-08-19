import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import Reservations from "./components/Reservations";
import OrderOnline from "./components/OrderOnline";
import Login from "./components/Login";
import Footer from "./components/Footer";
import BookingForm from "./components/BookingForm";

function App() {
  return (
    <div className="container-fluid">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Header />}/>
          <Route path="/about" element={<About />} />
          <Route path="/reservations" element={<Reservations />} />
          <Route path="/orderOnline" element={<OrderOnline />} />
          <Route path="/login" element={<Login />} />
          <Route path="/bookingForm" element={<BookingForm />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
