// import styles from './App.module.css';
import './App.css'
import React from 'react';
import Corousel from './components/Carousel';
import Header from './components/Header';
import Search from './components/Search';

const App = () => {
  return (
    <>
      <Header />
      <Corousel />
      {/* <Search /> */}
    </>
  )
};

export default App;