import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { decodeJWTPayload } from "../utils/apiAdminQueries";
import { queryApiEditPost } from "../utils/apiWriterQueries";

function EditPost() {
  const location = useLocation();
  const navigate = useNavigate();

  // Grab post details from router state
  const { PostDetails } = location.state || {};

  // Decode the author name from JWT
  const authorData = decodeJWTPayload();

  // If no post data available (e.g. page refresh), show fallback
  if (!PostDetails) {
    return (
      <div>
        <h2>No Post Found</h2>
        <p>Please go back and select a post to edit.</p>
        <button onClick={() => navigate(-1)}>Go Back</button>
      </div>
    );
  }

  const [editedPostObject, setNewPostObject] = useState({
    id: PostDetails.id,
    postTitle: PostDetails.blog_post_title || "",
    postContent: PostDetails.blog_post_content || "",
    authorName: authorData?.userName || "",
  });

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    // Submit updated post data (replace this with your edit API if available)
    queryApiEditPost(editedPostObject);

    console.log("Edited Post Submitted:", editedPostObject);

    // Navigate back to writer dashboard
    navigate("/full-stack-blog/writer");
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setNewPostObject((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div>
      <h1>Edit Blog Post</h1>
      <form onSubmit={formSubmissionHandler}>
        <label htmlFor="postTitle">Post Title: </label>
        <br />
        <textarea
          id="postTitle"
          name="postTitle"
          rows="2"
          cols="50"
          value={editedPostObject.postTitle}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="postContent">Post Content:</label>
        <br />
        <textarea
          id="postContent"
          name="postContent"
          rows="10"
          cols="50"
          value={editedPostObject.postContent}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="authorName">Author Name: </label>
        <input
          id="authorName"
          name="authorName"
          value={editedPostObject.authorName}
          readOnly
        />
        <br />
        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
}

export default EditPost;
