import React, { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import {
  BrowserRouter as Router,

 
  Route,
 
 
} from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Featured from "./components/Featured";
import About from "./components/About";
import useLocoScroll from "./hooks/useLocoScroll";

import "./App.scss";
import CustomCursor from "./CustomCursor";
import Featured2 from "./components/Featured2";
import { Slide } from "react-reveal";
import Dress from "./components/Dresses/Dress";




const Home = () => {
  const ref = useRef(null);
  const [preloader, setPreload] = useState(true);


  useLocoScroll(!preloader);

  useEffect(() => {
    if (!preloader && ref) {
      if (typeof window === "undefined" || !window.document) {
        return;
      }
    }
  }, [preloader]);

  const [timer, setTimer] = React.useState(3);

  const id = React.useRef(null);

  const clear = () => {
    window.clearInterval(id.current);
    setPreload(false);
  };

  React.useEffect(() => {
    id.current = window.setInterval(() => {
      setTimer((time) => time - 1);
    }, 1000);
    return () => clear();
  }, []);

  React.useEffect(() => {
    if (timer === 0) {
      clear();
    }
  }, [timer]);

  if (typeof window === "undefined" || !window.document) {
    return null;
  }

  return (
    <>
    <Router>
    <CustomCursor/>
      {preloader ? (
        <div className="loader-wrapper absolute">
          <h1></h1>
          <h2>Rio de Janeiro</h2>
        </div>
      ) : (
        <div
          className="main-container"
          id="main-container"
          data-scroll-container
          ref={ref}
        >
          <Navbar />
          <Header />
          <Featured />
          <About/>
          <Featured2/>
          <Dress/>

\

        </div>
      )}
        </Router>
    </>
  
  );
};
export default Home;