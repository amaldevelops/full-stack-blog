import { useState } from "react";
import { useNavigate } from "react-router-dom";
import reactLogo from "../assets/react.svg";
import "../assets/App.css";

import Login from "./Login";
import TechnicalInfo from "./TechnicalInfo";
import AllPosts from "./AllPosts";

function App() {
  return (
    <>
      <div>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      <Login />
      <TechnicalInfo />
    </>
  );
}

export default App;
