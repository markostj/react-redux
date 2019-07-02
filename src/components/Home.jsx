import React, { Component } from "react";
import { connect } from "react-redux";

class Home extends Component {
  state = {
    id: null,
    posts: null
  };
  componentDidMount() {
    let id = Math.floor(Math.random() * 100);
    fetch("https://jsonplaceholder.typicode.com/posts/" + id)
      .then(response => response.json())
      .then(json =>
        this.setState({
          posts: json,
          id
        })
      )
      .catch(error => console.log(error));
  }
  render() {
    const { posts } = this.state;
    const post = posts ? (
      <div className="post">
        <h2>{posts.title}</h2>
        <p>{posts.body}</p>
      </div>
    ) : (
      "no post"
    );
    return (
      <div>
        <h4>Homepage</h4>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae
          molestias totam, vero officiis voluptatem neque. Temporibus doloremque
          similique, cumque, officiis sit tenetur ut quisquam soluta voluptas,
          laborum est repudiandae a.
        </p>
        {post}
      </div>
    );
  }
}

export default Home;
