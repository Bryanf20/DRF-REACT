import React, { useState } from "react";
// import { useEffect } from "react";
import {
  Button,
  Link,
  AppBar,
  CssBaseline,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import SearchBar from "material-ui-search-bar";
import { NavLink, useNavigate } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  link: {
    margin: theme.spacing(1, 1.5),
  },
  toolbarTitle: {
    flexGrow: 1,
  },
}));

export default function Header() {
  const classes = useStyles();
  const navigate = useNavigate();

  // Handle Search request
  const [data, setData] = useState({ search: "" });

  const goSearch = () => {
    navigate(`/search/?search=${data.search}`);
  };

// Use this to perform searches when the user types into the searchbar without hitting [Enter key]
  // const [searchQuery, setSearchQuery] = useState("");

  // // Debounce search to avoid excessive API calls
  // useEffect(() => {
  //   const handler = setTimeout(() => {
  //     if (searchQuery.trim()) {
  //       navigate(`/search/?search=${searchQuery}`);
  //     }
  //   }, 500); // Adjust debounce delay as needed

  //   return () => {
  //     clearTimeout(handler);
  //   };
  // }, [searchQuery, navigate]);

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar
        position="static"
        color="default"
        elevation={0}
        className={classes.appBar}
      >
        <Toolbar className={classes.toolbar}>
          <Typography
            variant="h6"
            color="inherit"
            noWrap
            className={classes.toolbarTitle}
          >
            <Link
              component={NavLink}
              to="/"
              underline="none"
              color="textPrimary"
            >
              Blog
            </Link>
          </Typography>

          <SearchBar
            value={data.search}
            onChange={(newValue) => setData({ search: newValue })}
            onRequestSearch={goSearch}
          />

          {/* <SearchBar
            value={searchQuery}
            onChange={(newValue) => setSearchQuery(newValue)}
            onCancelSearch={() => setSearchQuery("")}
          /> */}

          <nav>
            <Link
              color="textPrimary"
              className={classes.link}
              component={NavLink}
              to="/register"
            >
              Register
            </Link>
          </nav>
          <Button
            color="primary"
            variant="outlined"
            className={classes.link}
            component={NavLink}
            to="/login"
          >
            Login
          </Button>
          <Button
            color="primary"
            variant="outlined"
            className={classes.link}
            component={NavLink}
            to="/logout"
          >
            Logout
          </Button>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}
