import { useState, useEffect } from "react";
import { getAllPosts } from "../utils/apiReaderQueries";
function AllPosts() {
  const [allThePosts, setAllThePosts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchPosts() {
      try {
        const fetchPosts = await getAllPosts();
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
      {allThePosts.map((posts) => (
        <div key={posts.id}>{posts.title}</div>
      ))}
    </div>
  );
}

export default AllPosts;
