

import React from 'react'
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom'
import Login from './Login';
import Signup from './Signup';
import Home from './Home';
import Header from './Header';
import Signout from './Signout';
import Errorpage from './Error';


const RouterApp = () => {

 return (
   <Router>
    <Routes>
    <Route path="/login" element={<Login />} />
    <Route path="/Signup" element={<Signup />}/>
    <Route path="/" element={<Home />}/>
    <Route path="/Header" element={<Header />}/>
    <Route path="/signout" element={<Signout />}/>
    <Route path="/*" element={<Errorpage />}/>

      </Routes>
      </Router>

    
  )


}

export default RouterApp;