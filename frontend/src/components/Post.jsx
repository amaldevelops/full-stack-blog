// This component will display a single post

import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import PropTypes from "prop-types";

import { getReadRouteQueries } from "../utils/apiReaderQueries";

import NavigationBar from "./NavigationBar";

function Post() {
  const { id } = useParams();
  console.log(id);
  const APIPathPostById = id;
  // const [APIPathPostById, setAPIPathPostById] = useState(postID);
  const [postById, setPostById] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function getPostById() {
      try {
        const apiPathPostById = `reader/posts/${APIPathPostById}`;
        const fetchPostById = await getReadRouteQueries(apiPathPostById);

        setPostById(fetchPostById["data"][0]);
        // console.log(postById);
        console.log(fetchPostById);
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
      <NavigationBar />
      <h2>{postById.blog_post_title}</h2>
      <p>{postById.blog_post_content}</p>
      <p>Posted on: {postById.blog_post_publish_timestamp}</p>
      {/* <p>{JSON.stringify(postById)}
      </p> */}
    </div>
  );
}

// Post.propTypes = {
//   postID: PropTypes.number.isRequired,
// };

export default Post;
