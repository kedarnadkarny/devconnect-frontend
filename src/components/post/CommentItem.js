import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteComment } from '../../actions/postActions';

class CommentItem extends Component {

  onDeleteClick(postId, commentId) {
    this.props.deleteComment(postId, commentId);
  }

  render() {
    const { comment, postId, auth } = this.props;

    return (
      <div className="row">
        <div className="col s12 m12">
          <div className="card">
            <div className="card-content">
              <div className="row">
                <div className="col m4">
                  <img src={comment.avatar} alt="" />
                </div>
                <div className="col m6">
                  <h5>{comment.name} </h5>
                  {comment.text}
                </div>
                <div className="col m2">
                  {comment.user === auth.user.id ? (
                    <button
                      className="btn"
                      type="button"
                      onClick={this.onDeleteClick.bind(this, postId, comment._id)}>DELETE</button>) : null
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>






      // <div className="card">
      //   <img src={comment.avatar} alt="" />
      //   Name: {comment.name}
      //   Text: {comment.text}
      //   {comment.user === auth.user.id ? (
      //     <button
      //       className="btn"
      //       type="button"
      //       onClick={this.onDeleteClick.bind(this, postId, comment._id)}>DELETE</button>) : null
      //   }
      // </div>
    )
  }
}

CommentItem.propTypes = {
  deleteComment: PropTypes.func.isRequired,
  comment: PropTypes.object.isRequired,
  postId: PropTypes.string.isRequired,
  auth: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, { deleteComment })(CommentItem);