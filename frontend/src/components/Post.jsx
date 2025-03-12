// This component will display a single post

import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

import { getReadRouteQueries } from "../utils/apiReaderQueries";

import NavigationBar from "./NavigationBar";

function Post({ postID }) {
  const [APIPathPostById, setAPIPathPostById] = useState(postID);
  const [postById, setPostById] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function getPostById() {
      try {
        const apiPathPostById = `reader/posts/${APIPathPostById}`;
        const fetchPostById = await getReadRouteQueries(apiPathPostById);

        setPostById(fetchPostById.data[0]);
        // console.log(`PostBYID Length: ${Object.keys(postById.data[0]).length}`);
        console.log(fetchPostById.data);
      } catch (error) {
        setError(error.message);
        return <div>{error}</div>;
      }
    }
    console.log(postById);

    getPostById();
  }, []);

  if (error) {
    return <div>{error}</div>;
  }

  // if (Object.keys(postById).length === 0) {
  //   return (
  //     <div>
  //       <h3>Loading....</h3>
  //     </div>
  //   );
  // }

  return (
    <div>
      <NavigationBar />
      <h1>Test Post</h1>
      {/* <h1>{postById}</h1> */}
    </div>
  );
}

export default Post;
