import { useEffect, useState } from "react";
import "./App.css";
import PostLoading from "./Components/PostLoading";
// import Posts from "./Components/Posts";
// import PostLoadingComponent from "./Components/PostLoading";

function App() {
  // const PostLoading = PostLoadingComponent(Posts);
  const [appState, setAppState] = useState({
    loading: false,
    posts: null,
  });

  useEffect(() => {
    setAppState({ loading: true });
    const apiUrl = "http://127.0.0.1:8000/api/";
    fetch(apiUrl)
      .then((data) => data.json())
      .then((posts) => {
        setAppState({ loading: false, posts: posts });
      });
  }, []);

  return (
    <div className="App">
      <h1>Latest Posts</h1>
      <PostLoading isLoading={appState.loading} posts={appState.posts} />
      {/* <PostLoading appState={appState} /> */}
    </div>
  );
}

export default App;

// import React from "react";

// class connectionExample extends React.Component {
//   componentDidMount() {
//     const apiUrl = "http://127.0.0.1:8000/api/";
//     fetch(apiUrl)
//       .then((response) => response.json())
//       .then((data) => console.log(data));
//   }
//   render() {
//     return <div>Example connection</div>;
//   }
// }
// export default connectionExample;
