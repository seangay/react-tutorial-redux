import React, { Component } from 'react';
import Navbar from "./components/Navbar";
import {BrowserRouter, Route} from "react-router-dom";
import Home from "./views/Home";
import Todo from "./views/Todo";
import About from "./views/About";

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar/>
          <Route exact path="/" component={Home} />
          <Route path="/todo" component={Todo} />
          <Route path="/about" component={About} />
        </div>
      </BrowserRouter>
    );
  }
}


