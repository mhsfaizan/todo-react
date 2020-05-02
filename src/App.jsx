import React from "react";
import "./App.css";
import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";
import Home from "./components/home/home";
import Contact from "./components/contact/contact";
import { Route } from "react-router-dom";

function App() {
  return (
    <React.Fragment>
      <Navbar></Navbar>
      <main>
        <Route exact path="/home" component={Home} />
        <Route exact path="/contact" component={Contact} />
      </main>
      <Footer></Footer>
    </React.Fragment>
  );
}

export default App;
