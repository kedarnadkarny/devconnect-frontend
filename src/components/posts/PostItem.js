import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { deletePost, addLike, removeLike } from '../../actions/postActions';
import { btnMedium } from '../common/Styling';

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
      <div className="row">
        <div className="col s12 m12">
          <div className="card">
            <div className="card-content">
              <div className="row">
                <div className="col m4">
                  <img src={post.avatar} alt="Avatar goes here" />
                </div>
                <div className="col m4">
                  <h5>{post.name}</h5>
                  {post.text}
                </div>
                <div className="col m4">
                  {showActions ? (
                    <table>
                      <tbody>
                        <tr>
                          <td>
                            <button
                              onClick={this.onLikeClick.bind(this, post._id)}
                              type="button"
                              className="btn"
                              style={btnMedium}>
                              <i class="fas fa-thumbs-up"></i> <span>{post.likes.length}</span>
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <button
                              onClick={this.onUnLikeClick.bind(this, post._id)}
                              type="button"
                              className="btn"
                              style={btnMedium}>
                              <i class="fas fa-thumbs-down"></i>
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <Link to={`/post/${post._id}`} className="btn"
                              style={btnMedium}>
                              <i class="fas fa-comment"></i>
                            </Link>
                          </td>
                        </tr>

                        {post.user === auth.user.id ? (
                          <tr>
                            <td>
                              <button
                                className="btn"
                                type="button"
                                onClick={this.onDeleteClick.bind(this, post._id)}
                                style={btnMedium}><i class="fas fa-trash-alt"></i></button>
                            </td>
                          </tr>)
                          : null
                        }
                      </tbody>
                    </table>
                  ) : null}
                </div>
              </div>
            </div>
          </div>
        </div>
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