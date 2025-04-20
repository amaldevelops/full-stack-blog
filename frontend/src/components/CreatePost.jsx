import { useState } from "react";
import {
  loadJwtTokenToHttpHeader,
  queryApiCreatePost,
  decodeJWTPayload,
} from "../utils/apiAdminQueries";

function CreatePost() {
  const authorName = decodeJWTPayload();

  const [newPostObject, SetNewPostObject] = useState({
    postTitle: "",
    postContent: "",
    authorName: authorName.userName,
  });
  // console.log(authorName.userName)
  const formSubmissionHandler = (event) => {
    event.preventDefault();
    queryApiCreatePost(newPostObject);
    console.log(newPostObject);
  };

  return (
    <div>
      <h1>Create New Blog Post</h1>
      <form onSubmit={formSubmissionHandler}>
        <label htmlFor="postTitle">Post Title: </label>
        <br />
        <textarea
          id="postTitle"
          name="postTitle"
          rows="2"
          cols="50"
          type="text"
          value={newPostObject.postTitle}
          onChange={(event) => {
            SetNewPostObject({
              ...newPostObject,
              [event.target.name]: event.target.value,
            });
          }}
        ></textarea>
        <br />
        <label htmlFor="postContent">Post Content:</label>
        <br />
        <textarea
          id="postContent"
          name="postContent"
          rows="10"
          cols="50"
          type="text"
          value={newPostObject.postContent}
          onChange={(event) => {
            SetNewPostObject({
              ...newPostObject,
              [event.target.name]: event.target.value,
            });
          }}
        ></textarea>
        <br />
        <label htmlFor="authorName">Author Name: </label>
        <input
          id="authorName"
          name="authorName"
          value={newPostObject.authorName}
          // onChange={(event) => {
          //   SetNewPostObject({
          //     ...newPostObject,
          //     [event.target.name]: event.target.value,
          //   });

          // }}
          readOnly
        ></input>
        <br />
        <button type="submit">Create Post</button>
      </form>
    </div>
  );
}

export default CreatePost;
