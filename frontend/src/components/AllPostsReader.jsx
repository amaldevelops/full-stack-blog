// This component Will read all the posts from the API and display them as a list, users can click and read the full article and comments and make comments
const PostByIdURL = import.meta.env.VITE_API_LOAD_POST_BY_ID;

import { useState, useEffect } from "react";
import { queryApiReadPosts } from "../utils/apiReaderQueries";
import { Link } from "react-router-dom";

import UserDetails from "./UserDetails";

function AllPosts() {
  const [allThePosts, setAllThePosts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchPosts() {
      try {
        const apiPathAllPosts = import.meta.env.VITE_API_LOAD_ALL_POSTS; //"reader/posts";
        const fetchAllPosts = await queryApiReadPosts(apiPathAllPosts);
        setAllThePosts(fetchAllPosts.data);
      } catch (error) {
        setError(error.message);
      }
    }
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
      <UserDetails />
      <h2>Blog All Posts view</h2>
      <div>
        {allThePosts.map((posts) => (
          <ul key={posts.id}>
            <li key={posts.id}>
              <Link to={`${PostByIdURL}/${posts.id}`}>
                {posts.blog_post_title},
              </Link>
              Published Date: {posts.blog_post_publish_timestamp}
            </li>
          </ul>
        ))}
      </div>
    </div>
  );
}

export default AllPosts;
