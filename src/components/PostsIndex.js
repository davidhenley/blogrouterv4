import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { Link } from 'react-router-dom';
import * as actions from '../actions';

class PostsIndex extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  renderPosts() {
    return _.map(this.props.posts, (post, i) =>
      <li key={i} className="list-group-item">
        {post.title}
      </li>
    );
  }

  render() {
    return (
      <div className="PostsIndex container">
        <div className="text-right">
          <Link to="/posts/new" className="btn btn-primary">
            Add a Post
          </Link>
        </div>
        <h3>Posts</h3>
        <ul className="list-group">
          {this.renderPosts()}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = ({ posts }) => {
  return { posts };
}

export default connect(mapStateToProps, actions)(PostsIndex);
