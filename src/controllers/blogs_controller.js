import React, { useState, useEffect } from 'react';

function BlogPostController() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('/api/posts')
        .then(response => response.json())
        .then(data => setPosts(data));
    }, []);
return (
    <div>
        {posts.map(post => (
            <div key={post.id}>
                <h2>{post.title}</h2>
                <p>{post.body}</p>
    </div>
))}
</div>
);
}


export default BlogPostController;