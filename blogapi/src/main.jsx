import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import Header from "./Components/header.jsx";
import SignUp from "./Components/register.jsx";
import SignIn from "./Components/login.jsx";
import Logout from "./Components/logout.jsx";
// import Footer from "./Components/footer.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Router>
    <React.StrictMode>
      <Header />
      <Routes>
        <Route exact path="/" Component={App} />
        <Route path="/register" Component={SignUp} />
        <Route path="/login" Component={SignIn} />
        <Route path="/logout" Component={Logout} />
      </Routes>
      {/* <Footer /> */}
    </React.StrictMode>
  </Router>
);
