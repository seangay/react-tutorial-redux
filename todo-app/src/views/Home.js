import React, {Component} from "react";
import axios from "axios";

export default class Home extends Component {
  state = {
    posts: []
  };
  
  async componentDidMount() {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
    
    this.setState({
      posts: response.data.slice(0, 10)
    })
  }
  
  render() {
    const {posts} = this.state;
    const postList = posts.length ? (posts.map(post => {
      return (
        <div className="post card" key={post.id}>
          <div className="card-content">
            <span className="card-title">{post.title}</span>
            <p>{post.body}</p>
          </div>
        </div>
      )
    })) : (
      <div className="center">No posts yet</div>
    );
    return (
      <div className="container">
        <h4 className="center">Home</h4>
        {postList}
      </div>
    );
  }
};
