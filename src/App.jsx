import React, { useContext } from 'react'
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
import { StoreContext } from './component/storeContext';
import Footer from './component/Footer';

const App = () => {
   const {login} = useContext(StoreContext)
  return (
    <div>

   {login? <Login/>:null}
  
 
      
       <Router>
       
     {!login? <Navbar/>:null}
   
       
        <Routes>
        
          <Route path='/' element={<Home/>} />
          <Route path='/book-hotel' element={<BookHotel/>} />
          <Route path='/hotel-room' element={<HotelRoom/>} />
          <Route path='/hotel-room/:city' element={<HotelRoom/>} />
          <Route path='/my-booking' element={<MyBooking/>} />
          <Route path='/exprience' element={<Exprience/>} />
          <Route path='/book-hotel/:id' element={<BookHotel/>} />
          <Route path='/about' element={<About/>}/>
        </Routes>
       </Router>

               {!login? <Footer/>:null}
    </div>
  )
}

export default App
