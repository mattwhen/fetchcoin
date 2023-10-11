import React from 'react';
import Nav from './components/Nav/Nav';
import About from './components/About/About';
import Table from './components/Table/Table';
import Footer from './components/Footer/Footer';
import './App.css';
import Mission from './components/Mission/Mission';
import Contact from './components/Contact/Contact';

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

