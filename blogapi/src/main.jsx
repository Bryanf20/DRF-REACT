import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import Header from "./Components/header.jsx";
// import footer from "./Components/footer.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Router>
    <React.StrictMode>
      <Header />
      <Routes>
        <Route path="/" Component={App} />
      </Routes>
      {/* <Footer /> */}
    </React.StrictMode>
  </Router>
);
