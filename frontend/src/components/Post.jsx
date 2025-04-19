// This component will display a single post

import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import PropTypes from "prop-types";

import { queryApiReadPosts } from "../utils/apiReaderQueries";

// import NavigationBar from "./NavigationBar";

function Post() {
  const { id } = useParams();
  console.log(id);
  const APIPathPostById = id;
  // const [APIPathPostById, setAPIPathPostById] = useState(postID);
  const [postById, setPostById] = useState(null);
  const [postComments, setPostComments] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function getPostById() {
      try {
        const apiPathPostById = `reader/posts/${APIPathPostById}`;
        const apiPathPostComments = `reader/posts/${APIPathPostById}/comment`;

        const fetchPostById = await queryApiReadPosts(apiPathPostById);
        const fetchPostComments = await queryApiReadPosts(
          apiPathPostComments
        );

        console.log(fetchPostComments);

        setPostById(fetchPostById["data"][0]);
        setPostComments(fetchPostComments["data"]["comments"]);
        // console.log(postById);
        // console.log(fetchPostById);
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
      <PostComment />
    </div>
  );
}

function PostComment({ commentObject }) {
  const [comment, setComment] = useState("");
  const [formValidationStatus, SetFormValidationStatus] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();

    if (!comment.trim()) {
      console.log("Empty comment, please try again !");
      SetFormValidationStatus("Empty comment, please try again !");
      return;
    }
    commentObject?.(comment);
    console.log("Submitted Comment:", comment);
    setComment("");
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
    </div>
  );
}

// Post.propTypes = {
//   postID: PropTypes.number.isRequired,
// };

export default Post;
