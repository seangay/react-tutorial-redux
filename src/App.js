import React from 'react';
import Ninjas from './components/Ninjas';

export default function App() {
  return (
    <div className="App">
      <h1>My first react app</h1>
      <p>Welcome</p>
      <Ninjas name="Ryu" age="25" belt="black"/>
      <Ninjas name="Ken" age="21" belt="gold"/>
    </div>
  );
}
