import { useEffect, useState,  } from "react"
import axios from "axios";
// you cannot use hooks in class components, hooks can only be used in functional components
export default function Posts(){
    
    const [posts, setPosts] = useState([]); // useEffect is called after every render, so it is used to fetch data from an API or perform side effects
    useEffect(function(){ //cyclic loop is stopped by passing an empty array as the second argument to useEffect, which means it will only run once after the initial render
        // this is the equivalent of componentDidMount in class components
        //ajax call to fetch posts
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then(res => setPosts(res.data))
    }, []); // empty array means this effect will only run once, after the initial render
    return(
    <div>
        <h1>All Posts</h1>
        {posts.map(post => (
            <div key = {post.id}> {post.title}</div> 
       ) )}
    </div>
    )
}