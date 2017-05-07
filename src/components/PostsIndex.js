import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
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
      <div className="PostsIndex">
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
