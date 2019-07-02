import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class Posts extends Component {
  render() {
    console.log(this.props);
    const { id, posts } = this.props;
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

const mapStateToProps = state => {
  return {
    posts: state.posts
  };
};

export default connect(mapStateToProps)(Posts);
