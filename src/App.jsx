import React from 'react'
import { bookingData,hotelDetails } from './assets/assets';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import BookHotel from './Pages/BookHotel';
import HotelRoom from './Pages/HotelRoom';
import MyBooking from './Pages/MyBooking';
import Exprience from './Pages/Exprience';
import Navbar from './component/Navbar';
import About from './Pages/About';
import Login from './component/Login';

const App = () => {
  return (
    <div>

   
      
       <Router>
       <Login/>
       <Navbar/>
        <Routes>
        
          <Route path='/' element={<Home/>} />
          <Route path='/book-hotel' element={<BookHotel/>} />
          <Route path='/hotel-room' element={<HotelRoom/>} />
          <Route path='/my-booking' element={<MyBooking/>} />
          <Route path='/exprience' element={<Exprience/>} />
          <Route path='/book-hotel/:id' element={<BookHotel/>} />
          <Route path='/about' element={<About/>}/>
        </Routes>
       </Router>


    </div>
  )
}

export default App
