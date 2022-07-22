import { Component } from "react";
import React from "react";
import ReactDOM from "react-dom";
import "./App.css"; 
import Footer from "./components/Footer.js";
import Header from "./components/Header.js";
import Main from "./components/Main";
// import Iphone from "./components/Iphone/Iphone";
// import $ from "jquery";
import "./css/styles.css";
import "./css/bootstrap.css";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;
