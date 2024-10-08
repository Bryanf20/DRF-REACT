import { useState, useEffect } from "react";
import axiosInstance from "../axios";
import { useLocation } from "react-router-dom";
// import App from "../App";

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";

const useStyles = makeStyles((theme) => ({
  cardMedia: {
    paddingTop: "56.25%", // 16:9
  },
  link: {
    margin: theme.spacing(1, 1.5),
  },
  cardHeader: {
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[200]
        : theme.palette.grey[700],
  },
  postTitle: {
    fontSize: "16px",
    textAlign: "left",
  },
  postText: {
    display: "flex",
    justifyContent: "left",
    alignItems: "baseline",
    fontSize: "12px",
    textAlign: "left",
    marginBottom: theme.spacing(2),
  },
}));

const Search = () => {
  const classes = useStyles();
  const location = useLocation(); // This hook returns the current location object
  const [appState, setAppState] = useState({
    search: "", // This state holds the search query
    posts: [],
  });

  useEffect(() => {
    const searchQuery = location.search;
    axiosInstance.get(`search/${searchQuery}`).then((res) => {
      const allPosts = res.data;
      setAppState({ search: "", posts: allPosts }); // Clear the search query after fetching results
      console.log(res.data);
    });
  }, [location.search]); // Re-run the effect when location.search changes

  // We could use this in place of the one above. they both do thesame thing
  // const searchQuery = location.search; // could still be defined within the useEffect if variable will be used just once 
  // useEffect(() => {
  //   axiosInstance.get(`search/${searchQuery}`)
  //     .then((res) => {
  //       setAppState({ search: "", posts: res.data }); // Clear the search query after fetching results
  //       console.log(res.data);
  //     })
  //     .catch((error) => {
  //       console.error('Error fetching search results:', error);
  //     });
  // }, [searchQuery]);   // Re-run the effect when location.search changes

  return (
    <Container maxWidth="md" component="main">
      <Grid container spacing={5} alignItems="flex-end">
        {appState.posts.map((post) => (
          <Grid item key={post.id} xs={12} md={4}>
            <Card className={classes.card}>
              <Link
                color="textPrimary"
                href={`/post/${post.slug}`}
                className={classes.link}
              >
                <CardMedia
                  className={classes.cardMedia}
                //   image="https://source.unsplash.com/random"
                  image="https://picsum.photos/720"
                  title="Image title"
                />
              </Link>
              <CardContent className={classes.cardContent}>
                <Typography
                  gutterBottom
                  variant="h6"
                  component="h2"
                  className={classes.postTitle}
                >
                  {post.title.length > 50
                    ? `${post.title.substr(0, 50)}...`
                    : post.title}
                </Typography>
                <div className={classes.postText}>
                  <Typography color="textSecondary">
                    {post.excerpt.length > 40
                      ? `${post.excerpt.substr(0, 40)}...`
                      : post.excerpt}
                  </Typography>
                </div>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>

    // Send results to be displyed on homepage
    // <div>
    //   <App posts={appState.posts} />
    // </div>
  );
};

export default Search;
