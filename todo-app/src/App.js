import React, { Component } from 'react';
import Navbar from "./components/Navbar";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Home from "./views/Home";
import Todo from "./views/Todo";
import About from "./views/About";
import Post from "./views/Post";

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar/>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/todo" component={Todo}/>
            <Route path="/about" component={About}/>
            <Route path="/:post_id" component={Post}/>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}


