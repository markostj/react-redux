import React, { Component } from "react";

class Post extends Component {
  state = {
    id: null,
    posts: null
  };
  componentDidMount() {
    let id = this.props.match.params.postid;
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
    const { posts, id } = this.state;
    console.log(posts);
    const post = posts ? (
      <div className="post">
        <h2>{posts.title}</h2>
        <p>{posts.body}</p>
      </div>
    ) : (
      "no post"
    );
    return (
      <>
        <h1>Recept</h1>
        {post}
      </>
    );
  }
}

export default Post;
