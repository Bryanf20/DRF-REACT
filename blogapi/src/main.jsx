import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import Header from "./Components/header.jsx";
import SignUp from "./Components/register.jsx";
import SignIn from "./Components/login.jsx";
import Logout from "./Components/logout.jsx";
import Single from "./Components/single.jsx";
import Footer from "./Components/footer.jsx";
import Admin from "./admin.jsx";
import Create from "./Components/admin/create.jsx";
import Edit from "./Components/admin/edit.jsx";
import Delete from "./Components/admin/delete.jsx";

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <Router>
//     <React.StrictMode>
//       <Header />
//       <Routes>
//         <Route exact path="/" Component={App} />
//         <Route path="/register" Component={SignUp} />
//         <Route path="/login" Component={SignIn} />
//         <Route path="/logout" Component={Logout} />
//         <Route path="/post/:slug" Component={Single} />
//       </Routes>
//       {/* <Footer /> */}
//     </React.StrictMode>
//   </Router>
// );

// Best to use app.jsx to handle routing for more complex projects
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Search from "./Components/search.jsx";

const Main = () => {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          type: prefersDarkMode ? "dark" : "light",
        },
      }),
    [prefersDarkMode]
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <React.StrictMode>
          <Header />
          <Routes>
            <Route path="/" element={<App />} />
            <Route exact path="/admin" element={<Admin />} />
            <Route exact path="/admin/create" element={<Create />} />
            <Route exact path="/admin/edit/:id" element={<Edit />} />
            <Route exact path="/admin/delete/:id" element={<Delete />} />
            <Route path="/register" element={<SignUp />} />
            <Route path="/login" element={<SignIn />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/post/:slug" element={<Single />} />
            <Route path="/search" element={<Search />} />
          </Routes>
          <Footer />
        </React.StrictMode>
      </Router>
    </ThemeProvider>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(<Main />);
