// import styles from './App.module.css';
import "./App.css";
import React from "react";
import Corousel from "./components/Carousel";
import Header from "./components/Header";
import Search from "./components/Search";
// import Sidebar from "./components/Sidebar";

const App = () => {
  return (
    <>
      {/* <Sidebar /> */}
      <Header />
      <Corousel />
    </>
  );
};

export default App;
