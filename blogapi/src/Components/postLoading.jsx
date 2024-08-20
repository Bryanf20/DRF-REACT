import PropTypes from "prop-types";
// import Posts from "./posts";

// export default function PostLoading({ isLoading, posts }) {
//   return (
//     <div>
//       {!isLoading ? (
//         <Posts posts={posts} />
//       ) : (
//         <p style={{ fontSize: "25px" }}>
//           We are waiting for the data to load!...
//         </p>
//       )}
//     </div>
//   );
// }
// 
// // Add PropTypes validation
// PostLoading.propTypes = {
// 	isLoading: PropTypes.bool.isRequired,
// 	posts: PropTypes.array,
// };

function PostLoading(Component) {
  function PostLoadingComponent({ isLoading, ...props }) {
    if (!isLoading) return <Component {...props} />;
    return (
      <p style={{ fontSize: "25px" }}>
        We are waiting for the data to load!...
      </p>
    );
  }

  // const PostLoading = (Component) => ({ isLoading, ...props }) => {
  //   return isLoading ? (
  //     <p style={{ fontSize: "25px" }}>
  //       We are waiting for the data to load!...
  //     </p>
  //   ) : (
  //     <Component {...props} />
  //   );
  // };

  // Add PropTypes validation
  PostLoadingComponent.propTypes = {
    isLoading: PropTypes.bool.isRequired,
  };
  return PostLoadingComponent;
}

export default PostLoading;
