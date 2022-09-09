import React from 'react';
import './App.css';
import Home from './Components/Home';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Upload from './Components/Upload';
import SignUp from './Components/SignUp';
import Login from './Components/Login';
import Navbar from './Components/Navbar';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />}>
          </Route>
          <Route path="home" element={<Home />}>
          </Route>
          <Route path="login" element={<Login />}>
          </Route>
          <Route path="signup" element={<SignUp />}>
          </Route>
          <Route path="upload" element={<Upload />}>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>

  );
}

export default App;
