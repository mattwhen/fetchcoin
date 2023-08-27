import React from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Table from './components/Table';
import Footer from './components/Footer';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './App.css';
import Mission from './components/Mission';

const App = () => {
  return (
    <>
      <Nav />
      <About />
      <Table />
      <Mission />
      <Footer />
    </>
  );
}

export default App;

