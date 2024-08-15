import { useEffect, useState } from "react";
import "./App.css";
import PostLoading from "./Components/postLoading";
import axiosInstance from "./axios";
// import Posts from "./Components/posts";
// import PostLoadingComponent from "./Components/postLoading";

function App() {
  // const PostLoading = PostLoadingComponent(Posts);
  const [appState, setAppState] = useState({
    loading: false,
    posts: null,
  });

  // useEffect(() => {
  //   setAppState({ loading: true });
  //   const apiUrl = "http://127.0.0.1:8000/api/";
  //   fetch(apiUrl)
  //     .then((data) => data.json())
  //     .then((posts) => {
  //       setAppState({ loading: false, posts: posts });
  //     });
  // }, []);

  useEffect(() => {
		axiosInstance.get().then((res) => {
			const allPosts = res.data;
			setAppState({ loading: false, posts: allPosts });
			console.log(res.data);
		});
	}, [setAppState]);

  return (
    <div className="App">
      <h1>Latest Posts</h1>
      <PostLoading isLoading={appState.loading} posts={appState.posts} />
      {/* <PostLoading appState={appState} /> */}
    </div>
  );
}

export default App;

// Test function to display search results on home page, instead of creating a search page
// import PropTypes from "prop-types";

// function App(props) {
//   const [appState, setAppState] = useState({
//     loading: false,
//     posts: null,
//   });

//   useEffect(() => {
//     if (props.posts == null) {
//       // Fetch posts if props is not provided
//       axiosInstance.get().then((res) => {
//         const allPosts = res.data;
//         setAppState({ loading: false, posts: allPosts });
//         console.log(res.data);
//       });
//     } else {
//       // Set posts from props
//       setAppState({ loading: false, posts: props.posts });
//     }
//   }, [props]);

//   return (
//     <div className="App">
//       <h1>Latest Posts</h1>
//       {console.log(appState.posts)}
//       <PostLoading isLoading={appState.loading} posts={appState.posts} />
//     </div>
//   );
// }

// export default App;

// App.propTypes = {
//   posts: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.number.isRequired,
//       title: PropTypes.string.isRequired,
//       excerpt: PropTypes.string.isRequired,
//     })
//   ),
// };

