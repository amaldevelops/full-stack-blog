import { useState, useEffect } from "react";
import { queryApiReadPosts } from "../utils/apiReaderQueries";
import {
  queryApiCreatePost,
  queryApiDeletePost,
  queryApiReadDrafts,
  togglePublishStatus,
} from "../utils/apiWriterQueries";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const PostByIdURL = import.meta.env.VITE_API_LOAD_POST_BY_ID;

function AllPosts() {
  const [allThePosts, setAllThePosts] = useState([]);
  const [allTheDrafts, setAllTheDrafts] = useState([]);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  // Fetch all posts
  function fetchPosts() {
    async function getPosts() {
      try {
        const apiPathAllPosts = import.meta.env.VITE_API_LOAD_ALL_POSTS;
        const fetchAllPosts = await queryApiReadPosts(apiPathAllPosts);
        setAllThePosts(fetchAllPosts.data);
        console.log("All the posts fetchAllPosts is:", fetchAllPosts);
      } catch (error) {
        setError(error.message);
      }
    }
    getPosts();
  }

  // Fetch all draft posts
  function fetchDrafts() {
    async function getDrafts() {
      try {
        let allDraftsObject = await queryApiReadDrafts();
        setAllTheDrafts(allDraftsObject.data);
        console.log("Returned object allDraftsObject is:", allDraftsObject);
      } catch (error) {
        setError(error.message);
      }
    }
    getDrafts();
  }

  // Function to handle editing posts
  function EditButton(post) {
    console.log("Editing post:", post);
    navigate("edit", { state: { PostDetails: post } });
  }

  // Navigate to create a new post
  function newPostButton() {
    navigate("newpost")
    

    console.log("newpost");
  }

  // Function to handle deleting posts
  function DeleteButton(id) {
    console.log(id);
    queryApiDeletePost(id)
      .then(() => {
        // Re-fetch posts after deletion
        fetchPosts();
        fetchDrafts();  // Optionally, re-fetch drafts as well
      })
      .catch(error => setError(error.message));
  }

  // Function to handle publishing/unpublishing posts
  function PublishStatusButton(id, publishStatus) {
    togglePublishStatus(id, publishStatus)
      .then(() => {
        // Re-fetch posts after publish status change
        fetchPosts();
        fetchDrafts();  // Optionally, re-fetch drafts as well
      })
      .catch(error => setError(error.message));
  }

  // Fetch drafts on initial load
  useEffect(() => {
    fetchDrafts();
  }, []);

  // Fetch posts on initial load
  useEffect(() => {
    fetchPosts();
  }, []);

  if (error) {
    return <div>{error}</div>;
  }

  if (allThePosts.length === 0) {
    return (
      <div>
        <h3>Loading....</h3>
      </div>
    );
  }

  return (
    <div>
      <h2>Published Posts view</h2>
      <p>
        Note: Editing and deleting posts can only be done when a post is in the
        unpublished state. This ensures all changes are reviewed before the post
        goes live and helps avoid publishing errors. To edit or delete a post:
      </p>

      <ul>
        <li>First, click "Unpublish" on the post.</li>
        <li>Navigate to the Draft posts view.</li>
        <li>
          From there, you can either click "Edit" to update the post or "Delete"
          to remove it entirely.
        </li>
      </ul>

      <div>
        {allThePosts.map((posts) => (
          <ul key={posts.id}>
            <li key={posts.id}>
              <Link to={`${PostByIdURL}/${posts.id}`}>
                {posts.blog_post_title},
              </Link>
              Published Date: {posts.blog_post_publish_timestamp}
              <button onClick={() => PublishStatusButton(posts.id, false)}>
                Unpublish
              </button>
            </li>
          </ul>
        ))}
      </div>

      <div>
        <h2>Draft Posts view</h2>
        {allTheDrafts.map((posts) => (
          <ul key={posts.id}>
            <li key={posts.id}>
              <Link to={`/full-stack-blog/reader/posts/${posts.id}`}>
                {posts.blog_post_title},
              </Link>
              Published Date: {posts.blog_post_publish_timestamp}
              <button onClick={() => PublishStatusButton(posts.id, true)}>
                Publish Post
              </button>
              <button onClick={() => EditButton(posts)}>Edit</button>
              <button onClick={() => DeleteButton(posts.id)}>Delete</button>
            </li>
          </ul>
        ))}
      </div>

      <div className="border">
        <button onClick={() => newPostButton()}>Create a new Post</button>
      </div>
    </div>
  );
}

export default AllPosts;
