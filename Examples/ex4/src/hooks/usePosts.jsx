import React, { useState, useEffect } from "react";
function usePosts() {
    const [posts, setPosts] = useState([])
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(response => setPosts(response))
    }, [])
    return posts
}
export default usePosts