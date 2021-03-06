import React from "react";
import './App.css';
import Navbar from './components/Navbar';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Home from './pages';
import About from './pages/about';
import Solutions from './pages/solutions';
import AnnualReport from './pages/annual';
import Teams from './pages/team';
import Blogs from './pages/blogs';
import SignUp from './pages/signup';
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

function App() {
  return (
  <Router>
  <Navbar />
    <Routes id="page_wrapper">
    <Route path='/' element={<Home/>} />
    <Route path='/about' element={<About/>} />
    <Route path='/solutions' element={<Solutions/>} />
    <Route path='/annual' element={<AnnualReport/>} />
    <Route path='/team' element={<Teams/>} />
    <Route path='/blogs' element={<Blogs/>} />
    <Route path='/sign-up' element={<SignUp/>} />
  </Routes>
    </Router>
  );
}

export default App;