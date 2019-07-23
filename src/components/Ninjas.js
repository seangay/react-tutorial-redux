import React, {Component} from 'react';

export default class Ninjas extends Component {
  render() {
    console.log(this.props);
    const { name, age, belt } = this.props;
    
    return (
      <div className="ninja">
        <div>Name: {name}</div>
        <div>Age: {age}</div>
        <div>Belt: {belt}</div>
      </div>
    );
  }
}
