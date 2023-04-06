const React = require('react');
const Default = reaquire('./layouts/Default');

const EditPost = ({post}) => {
    return (
        <Default>
            <h2>Edit a post</h2>
            <form action={`/posts/${post.id}?_method=PUT`} method="POST">
                <label htmlFor="title">Title</label>
                <input
                type="text"
                name="title"
                id="title"
                required
                value={post.title}
                />
                <label htmlFor="author">Author</label>
                <input
                type="text"
                name="author"
                id="author"
                value={post.author}
                />
                <label htmlFor="date">Date</label>
                <input
                type="text"
                name="date"
                id="date"
                value={post.date}
                />
                <label htmlFor="destination">Destination</label>
                <input
                type="text"
                name="destination"
                id="destination"
                value={post.destination}
                />
                <label htmlFor="postContent">Content</label>
                <input
                type="text"
                name="postContent"
                id="postContent"
                value={post.postContent}
                />
                <label htmlFor="imageURL">Image URL</label>
                <input
                type="text"
                name="imageURL"
                id="imageURL"
                value={post.imageURL}
                />
                <br />
                <input type="submit" />
            </form>
        </Default>
    )
};

module.exports = EditPost;

// // edit existing post
// import { useState } from "react";
// import { useParams, useSelector } from "react-redux";

// const editPost = () => {
//     const { postId } = useParams();
//     const post = useSelector(state => state.posts.find(post => post.id === postId));

//     const [formData, setFormData] = useState({ title: post.title, body: post.body });

//   const handleInputChange = (event) => {
//     const { name, value } = event.target;
//     setFormData(formData => ({
//       ...formData,
//       [name]: value
//     }));
//   }


//     const handleSubmit = (event) => {
//         event.preventDefault();
//     }

//     return (
//         <div>
//             <h1>Edit Post</h1>
//             <form onSubmit={handleSubmit}>
//                 <label>
//                     Title:
//                     <input type="text" name="title" value={formData.title} onChange={handleInputChange} />
//                 </label>
//                 <label>
//                     Body:
//                     <textarea name="body" value={formData.body} onChange={handleInputChange} />
//                 </label>
//                 <button type="submit">Save Changes</button>
//             </form>
//         </div>
//     );
// }

// export default editPost;
