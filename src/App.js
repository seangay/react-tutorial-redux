import React, { Component } from 'react';
import Ninjas from './components/Ninjas';
import AddNinja from './components/AddNinja';

export default class App extends Component {
  state = {
    ninjas: [
      { name: 'Ryu', age: 30, belt: 'black', id: 1 },
      { name: 'Yoshi', age: 20, belt: 'green', id: 2 },
      { name: 'Crystal', age: 25, belt: 'pink', id: 3 }
    ]
  };
  
  addNinja = (ninja) => {
    ninja.id = Math.random();

    let ninjas = [...this.state.ninjas];
    ninjas.push(ninja);

    this.setState({
      ninjas: ninjas
    });
  };
  
  deleteNinja = (id) => {
    let updatedNinjaList = this.state.ninjas.filter((ninja) => {
      return ninja.id !== id;
    });
    this.setState({
      ninjas: updatedNinjaList
    });
  };
  
  
  componentDidMount() {
    console.log("Component mounted")
  }
  
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("COMPONENT UPDATED", prevProps, prevState)
  }
  
  render() {
    return (
      <div className="App">
        <h1>My first react app</h1>
        <p>Welcome</p>
        <Ninjas ninjas={this.state.ninjas} deleteNinja={this.deleteNinja}/>
        <AddNinja addNinja={this.addNinja}/>
      </div>
    );
  }
}
