import { Link, useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import PropTypes from "prop-types";

import {
  queryApiReadPosts,
  queryApiCreateComment,
  editComment,
  deleteComment,
} from "../utils/apiReaderQueries";
import { decodeJWTPayload } from "../utils/apiAdminQueries";

function Post() {
  const navigate = useNavigate();
  const { id } = useParams();
  const APIPathPostById = id;

  const [postById, setPostById] = useState(null);
  const [postComments, setPostComments] = useState(null);
  const [error, setError] = useState(null);
  const [refreshTrigger, setRefreshTrigger] = useState(false);

  function EditButton(comment) {
    console.log(comment)
    editComment(comment)
      .then(() => {
        setRefreshTrigger((prev) => !prev);
      })
      .catch((error) => setError(error.message));
  }

  function DeleteButton(postID, commentID) {
    deleteComment(postID, commentID)
      .then(() => {
        setRefreshTrigger((prev) => !prev);
      })
      .catch((error) => setError(error.message));
  }

  useEffect(() => {
    async function getPostById() {
      try {
        const apiPathPostById = `reader/posts/${APIPathPostById}`;
        const apiPathPostComments = `reader/posts/${APIPathPostById}/comment`;

        const fetchPostById = await queryApiReadPosts(apiPathPostById);
        const fetchPostComments = await queryApiReadPosts(apiPathPostComments);

        setPostById(fetchPostById["data"][0]);
        setPostComments(fetchPostComments["data"]["comments"]);
      } catch (error) {
        setError(error.message);
      }
    }

    getPostById();
  }, [APIPathPostById, refreshTrigger]);

  if (error) {
    return <div>{error}</div>;
  }

  if (!postById) {
    return (
      <div>
        <h3>Loading....</h3>
      </div>
    );
  }

  return (
    <div>
      <h2>{postById.blog_post_title}</h2>
      <p>{postById.blog_post_content}</p>
      <p>Posted on: {postById.blog_post_publish_timestamp}</p>

      <h3>Comments</h3>
      <ul>
        {postComments &&
          postComments.map((comment, index) => (
            <li key={index}>
              <strong>{comment.comment_timestamp}</strong>:{" "}
              {comment.comment_text}, Author ID: {comment.comment_author_id}{" "}
              {/* <button onClick={() => EditButton(comment)}>Edit</button> */}
              <button onClick={() => DeleteButton(postById.id, comment.id)}>
                Delete
              </button>
            </li>
          ))}
      </ul>

      <PostComment
        postID={id}
        onCommentSubmit={() => setRefreshTrigger((prev) => !prev)}
      />
    </div>
  );
}

function PostComment({ postID, onCommentSubmit }) {
  const [comment, setComment] = useState("");
  const [formValidationStatus, SetFormValidationStatus] = useState("");
  const [commentSubmissionStatus, SetcommentSubmissionStatus] = useState("");

  const authorID = decodeJWTPayload();

  const onSubmit = (event) => {
    event.preventDefault();

    if (!comment.trim()) {
      SetFormValidationStatus("Empty comment, please try again !");
      return;
    }

    const commentID = parseInt(postID, 10);

    queryApiCreateComment(comment, commentID, authorID.UserID)
      .then(() => {
        setComment("");
        SetFormValidationStatus("");
        SetcommentSubmissionStatus("Comment Submitted");
        onCommentSubmit(); // 👈 re-fetch comments
      })
      .catch((error) => {
        SetcommentSubmissionStatus("Error submitting comment");
        console.error(error.message);
      });
  };

  return (
    <div>
      <h3>Create a new Comment</h3>
      <form onSubmit={onSubmit}>
        <label htmlFor="newComment">New Comment</label>
        <br />
        <textarea
          id="newComment"
          maxLength={500}
          rows="5"
          cols="50"
          value={comment}
          onChange={(event) => {
            setComment(event.target.value);
          }}
        ></textarea>
        <br />
        <button type="submit">Create Comment</button>
      </form>
      <p>{formValidationStatus}</p>
      <p>{commentSubmissionStatus}</p>
      <button onClick={() => window.history.back()}>Go Back</button>
    </div>
  );
}

PostComment.propTypes = {
  postID: PropTypes.string.isRequired,
  onCommentSubmit: PropTypes.func.isRequired,
};

export default Post;
