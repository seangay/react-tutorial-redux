import React, {Component} from 'react';

export default class AddTodo extends Component {
  state = {
    content: ""
  };
  
  handleChange = (event) => {
    this.setState({
      content: event.target.value
    });
  };
  
  handleSubmit = (event) => {
    event.preventDefault();
    this.props.addTodo(this.state);
    this.setState({
      content: ""
    });
  };
  
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Add new todo:</label>
          <input type="text" onChange={this.handleChange} value={this.state.content}/>
        </form>
      </div>
    );
  }
}
