// This component Will read all the posts from the API and display them as a list, users can click and read the full article and comments and make comments

import { useState, useEffect } from "react";
import { getAllPosts } from "../utils/apiReaderQueries";
import { Link } from "react-router-dom";

import TechStack from "../components/TechStack";

function AllPosts() {
  const [allThePosts, setAllThePosts] = useState([]);
  const [postById, setPostById] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchPosts() {
      try {
        const apiPathAllPosts = "reader/posts";
        const apiPathPostById = "reader/posts/14";
        const fetchAllPosts = await getAllPosts(apiPathAllPosts);
        const fetchPostById = await getAllPosts(apiPathPostById);

        console.log(fetchPostById.data);
        setAllThePosts(fetchAllPosts.data);
        setPostById(fetchPostById.data[0]);
        // console.log(postById);
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
      <h1>All Posts</h1>
      <div>
        {allThePosts.map((posts) => (
          <ul key={posts.id}>
            <li key={posts.id}>
              <a href={`reader/posts/${posts.id}`}>
                Title: {posts.blog_post_title}{" "}
              </a>
              Published Date: {posts.blog_post_publish_timestamp}, Author ID:
              {posts.blog_post_author_id}, Post ID:{posts.id}
            </li>
          </ul>
        ))}
      </div>

      <div>
        {/* {postById.map((posts) => (
          <ul key={posts.id}>
            <li key={posts.id}>{posts.blog_post_title}</li>
          </ul>
        ))} */}

        {
          <p>
            {postById.blog_post_title}: {postById.blog_post_content}
          </p>
        }
      </div>
    </div>
  );
}

export default AllPosts;
