import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Stamp from './pages/Stamp';
import User from './pages/User';
import Log from './pages/Log';
import Card from './pages/Card';
import './style.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Navigation />
        <Routes>
          <Route path="/" element={<Stamp />} />
          <Route path="/user" element={<User />} />
          <Route path="/log" element={<Log />} />
          <Route path="/card" element={<Card />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;