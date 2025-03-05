import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {Link} from "react-router-dom";
import TechStack from "../components/TechStack";
import "../assets/App.css";

import Login from "./Login";
import AllPosts from "./AllPosts";

function App() {
  return (
    <>
    <Link to="reader/home">All Posts</Link>
      <TechStack />

      <Login />
    </>
  );
}

export default App;
