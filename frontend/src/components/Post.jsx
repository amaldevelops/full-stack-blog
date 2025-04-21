// This component will display a single post

import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import PropTypes from "prop-types";

import {
  queryApiReadPosts,
  queryApiCreateComment,
} from "../utils/apiReaderQueries";
import { decodeJWTPayload } from "../utils/apiAdminQueries";

function Post() {
  const { id } = useParams();
  console.log(id);
  const APIPathPostById = id;
  const [postById, setPostById] = useState(null);
  const [postComments, setPostComments] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function getPostById() {
      try {
        const apiPathPostById = `reader/posts/${APIPathPostById}`;
        const apiPathPostComments = `reader/posts/${APIPathPostById}/comment`;

        const fetchPostById = await queryApiReadPosts(apiPathPostById);
        const fetchPostComments = await queryApiReadPosts(apiPathPostComments);

        console.log(fetchPostComments);

        setPostById(fetchPostById["data"][0]);
        setPostComments(fetchPostComments["data"]["comments"]);
      } catch (error) {
        setError(error.message);
        return <div>{error}</div>;
      }
    }

    getPostById();
  }, [APIPathPostById]);

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
        {postComments.map((comment, index) => (
          <li key={index}>
            <strong>{comment.comment_timestamp}</strong>: {comment.comment_text}{" "}
            ,Author ID:{comment.comment_author_id}
          </li>
        ))}
      </ul>

      <PostComment postID={id} />
    </div>
  );
}

function PostComment({ postID }) {
  const [comment, setComment] = useState("");
  const [formValidationStatus, SetFormValidationStatus] = useState("");
  const [commentSubmissionStatus, SetcommentSubmissionStatus] = useState("");

  const authorID = decodeJWTPayload();
  console.log("Author ID IS", authorID.UserID);

  const onSubmit = (event) => {
    event.preventDefault();

    if (!comment.trim()) {
      console.log("Empty comment, please try again !");
      SetFormValidationStatus("Empty comment, please try again !");
      return;
    }
    // commentObject?.(comment);
    console.log("Comment ID is matey", parseInt(postID, 10));
    const commentID = parseInt(postID, 10);
    queryApiCreateComment(comment, commentID, authorID.UserID);
    console.log("Submitted Comment:", comment);
    setComment("");
    SetcommentSubmissionStatus("Comment Submitted");
  };

  return (
    <div>
      <h3>Create a new Comment</h3>
      <form onSubmit={onSubmit}>
        <label htmlFor="newComment">New Comment</label>
        <br />
        <textarea
          id="newComment"
          type="text"
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
    </div>
  );
}

// Post.propTypes = {
//   postID: PropTypes.number.isRequired,
// };

export default Post;
