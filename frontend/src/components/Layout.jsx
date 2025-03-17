import react from "react";
import { Outlet } from "react-router-dom";
import NavigationBar from "./NavigationBar";
import Footer from "./Footer";

function Layout() {
  return (
    <div className="layoutContainer">
      <div className="navbar">
        <NavigationBar />
      </div>
      <main className="content">
        <Outlet />
      </main>

      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default Layout;
