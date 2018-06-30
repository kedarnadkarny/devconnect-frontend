import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { deletePost, addLike, removeLike } from '../../actions/postActions';

class PostItem extends Component {

  onDeleteClick(id) {
    this.props.deletePost(id);
  }

  onLikeClick(id) {
    this.props.addLike(id);
  }

  onUnLikeClick(id) {
    this.props.removeLike(id);
  }

  findUserLike(likes) {
    const { auth } = this.props;
    if (likes.filter(like => like.user === auth.user.id).length > 0) {
      return true;
    } else {
      return false;
    }
  }

  render() {
    const { post, auth, showActions } = this.props;
    return (
      <div className="card">
        <img src={post.avatar} alt="Avatar goes here" />
        {post.name}
        {post.text}
        {showActions ? (
          <span>
            <button
              onClick={this.onLikeClick.bind(this, post._id)}
              type="button"
              className="btn">
              Like <span>{post.likes.length}</span>
            </button>
            <button
              onClick={this.onUnLikeClick.bind(this, post._id)}
              type="button"
              className="btn">
              Unlike
            </button>
            <Link to={`/post/${post._id}`} className="btn">
              Comments
            </Link>
            {post.user === auth.user.id ? (
              <button
                className="btn"
                type="button"
                onClick={this.onDeleteClick.bind(this, post._id)}>DELETE</button>) : null
            }
          </span>
        ) : null}
      </div>
    )
  }
}

PostItem.defaultProps = {
  showActions: true
}

PostItem.propTypes = {
  deletePost: PropTypes.func.isRequired,
  addLike: PropTypes.func.isRequired,
  removeLike: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, { deletePost, addLike, removeLike })(PostItem);