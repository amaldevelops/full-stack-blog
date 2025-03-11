// This component will display a single post

import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

import { getReadRouteQueries } from "../utils/apiReaderQueries";

import NavigationBar from "./NavigationBar";

function Post() {
  return (
    <div>
      <NavigationBar />

      <h1>Test Post</h1>
    </div>
  );
}

export default Post;
