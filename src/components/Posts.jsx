import React, { Component } from "react";
import { Link } from "react-router-dom";

class Posts extends Component {
  state = {
    id: null,
    posts: null
  };
  componentDidMount() {
    /* const id = this.props.match.params.postid;
    this.setState({
      id
    }); */
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(response => response.json())
      .then(json =>
        this.setState({
          posts: json
        })
      )
      .catch(error => console.log(error));
  }
  postClick = e => {};
  render() {
    const { id, posts } = this.state;
    return (
      <div className="post">
        {posts
          ? posts.map(post => (
              <div className="post__title" key={post.id}>
                <Link to={"/" + post.id}>
                  <h2>{post.title}</h2>
                </Link>
              </div>
            ))
          : "No posts right now."}
      </div>
    );
  }
}

export default Posts;
