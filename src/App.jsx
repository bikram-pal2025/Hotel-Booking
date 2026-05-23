import React, { useContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import BookHotel from "./Pages/BookHotel";
import HotelRoom from "./Pages/HotelRoom";
import MyBooking from "./Pages/MyBooking";
import Exprience from "./Pages/Exprience";
import About from "./Pages/About";

import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import Login from "./component/Login";

import { StoreContext } from "./component/storeContext";

const App = () => {
  const { login } = useContext(StoreContext);

  return (
    <Router>
      <div className="min-h-screen flex flex-col">

        {/* Login Popup */}
        {login ? <Login /> : null}

        {/* Navbar */}
        {!login ? <Navbar /> : null}

        {/* Main Content */}
        <main className="flex-1">

          <Routes>

            <Route
              path="/"
              element={<Home />}
            />

        

            <Route
              path="/book-hotel/:id"
              element={<BookHotel />}
            />

            <Route
              path="/hotel-room"
              element={<HotelRoom />}
            />

            <Route
              path="/hotel-room/:city"
              element={<HotelRoom />}
            />

            <Route
              path="/my-booking"
              element={<MyBooking />}
            />

            <Route
              path="/exprience"
              element={<Exprience />}
            />

            <Route
              path="/about"
              element={<About />}
            />

          </Routes>

        </main>

        {/* Footer */}
        {!login ? <Footer /> : null}

      </div>
    </Router>
  );
};

export default App;