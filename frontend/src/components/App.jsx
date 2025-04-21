import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
// import TechStack from "../components/TechStack";
// import "../assets/App.css";

// import NavigationBar from "./NavigationBar";
// import Login from "./Login";
// import AllPosts from "./AllPostsReader";

import Documentation from "./Documentation";
import UserDetails from "./UserDetails";

function App() {
  return (
    <>
      <UserDetails />
      <Documentation />
    </>
  );
}

export default App;
