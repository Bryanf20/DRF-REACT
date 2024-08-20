import { useEffect, useState } from 'react';
import './App.css';
import Posts from './Components/admin/posts.jsx';
import PostLoadingComponent from './Components/postLoading.jsx';
import axiosInstance from './axios';

export default function Admin() {
	const PostLoading = PostLoadingComponent(Posts);
	const [appState, setAppState] = useState({
		loading: true,
		posts: null,
	});

	useEffect(() => {
		axiosInstance.get().then((res) => {
			const allPosts = res.data;
			setAppState({ loading: false, posts: allPosts });
			console.log(res.data);
		});
	}, [setAppState]);

    // useEffect(() => {
    //     const fetchPosts = async () => {
    //         try {
    //             const response = await axiosInstance.get();
    //             const allPosts = response.data;
    //             setAppState({ loading: false, posts: allPosts });
    //         } catch (error) {
    //             console.error("Error fetching posts:", error);
    //             setAppState({ loading: false, posts: [] });
    //         }
    //     };
    
    //     fetchPosts();
    // }, [setAppState]);

	return (
		<div className="App">
			<h1>Latest Posts</h1>
			<PostLoading isLoading={appState.loading} posts={appState.posts} />
		</div>
	);
}
