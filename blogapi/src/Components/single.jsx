import { useState, useEffect } from "react";
import axiosInstance from "../axios";
import { useParams } from "react-router-dom";
//MaterialUI
import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
}));

export default function Single() {
  const { slug } = useParams(); // Alows us to extract slug parameter from the url
  const classes = useStyles();

  const [data, setData] = useState(null);

  useEffect(() => {
    axiosInstance.get(`posts/${slug}`).then((res) => {
      setData({ posts: res.data });
      console.log(res.data.title);
    });
  }, [slug]);

  if (!data) {
    return (
      <Container component="main" maxWidth="md">
        <CssBaseline />
        <div className={classes.paper}>
          <Typography variant="h5" align="center" color="textSecondary">
            Loading...
          </Typography>
        </div>
      </Container>
    );
  }

  return (
    <Container component="main" maxWidth="md">
      <CssBaseline />
      <div className={classes.paper}></div>
      <div className={classes.heroContent}>
        <Container maxWidth="sm">
          <Typography
            component="h1"
            variant="h2"
            align="center"
            color="textPrimary"
            gutterBottom
          >
            {data.posts.title}
          </Typography>
          <Typography
            variant="h5"
            align="center"
            color="textSecondary"
            paragraph
          >
            {data.posts.excerpt}
          </Typography>
        </Container>
      </div>
    </Container>
  );
}
