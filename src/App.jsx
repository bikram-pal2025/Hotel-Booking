import React from 'react'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import BookHotel from './Pages/BookHotel';
import HotelRoom from './Pages/HotelRoom';
import MyBooking from './Pages/MyBooking';
import Exprience from './Pages/Exprience';

const App = () => {
  return (
    <div>
      
       <Router>
        <Route>
        
          <Route path='/' element={<Home/>} />
          <Route path='/book-hotel' element={<BookHotel/>} />
          <Route path='/hotel-room' element={<HotelRoom/>} />
          <Route path='/my-booking' element={<MyBooking/>} />
          <Route path='/exprience' element={<Exprience/>} />
          <Route path='/' element={} />
        </Route>
       </Router>


    </div>
  )
}

export default App
