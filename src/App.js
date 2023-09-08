import React from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Table from './components/Table';
import Footer from './components/Footer';
import './App.css';
import Mission from './components/Mission';
import Contact from './components/Contact';

const App = () => {
  return (
    <>
      <Nav/>
      <About/>
      <Table/>
      <Mission/>
      <Contact/>
      <Footer/>
    </>
  );
}

export default App;

