import { useState } from "react";

function CreatePost() {
  const [newPostObject, SetNewPostObject] = useState({
    postTitle: "",
    postContent: "",
    authorName: "",
  });

  const formSubmissionHandler = (event) => {
    event.preventDefault();
    console.log("Prevented");
  };
  console.log(newPostObject);
  return (
    <div>
      <h1>Create Post</h1>
      <form onSubmit={formSubmissionHandler}>
        <label htmlFor="postTitle">Post Title: </label>
        <br />
        <textarea
          id="postTitle"
          name="postTitle"
          rows="2"
          cols="50"
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
        <button type="button">Create Post</button>
      </form>
    </div>
  );
}

export default CreatePost;
