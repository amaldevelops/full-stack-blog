// This component will display a single post

import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

import { getReadRouteQueries } from "../utils/apiReaderQueries";

import NavigationBar from "./NavigationBar";

function Post() {
  const [postById, setPostById] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function getPostById() {
      try {
        const apiPathPostById = "reader/posts/14";
        const fetchPostById = await getReadRouteQueries(apiPathPostById);
        console.log(fetchPostById.data);
        setPostById(fetchPostById.data[0]);
      } catch (error) {
        setError(error.message);
      }
    }
  });
  return (
    <div>
      <NavigationBar />

      <h1>Test Post</h1>
    </div>
  );
}

export default Post;
