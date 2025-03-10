import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import TechStack from "../components/TechStack";
// import "../assets/App.css";

import NavigationBar from "./NavigationBar";
import Login from "./Login";
import AllPosts from "./AllPosts";


function App() {
  return (
    <>
    <NavigationBar/>
      <TechStack />

      <Login />
    </>
  );
}

export default App;
