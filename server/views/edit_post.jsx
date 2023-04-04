// edit existing post
import { useState } from "react";
import { useParams, useSelector } from "react-redux";

const editPost = () => {
    const { postId } = useParams();
    const post = useSelector(state => state.posts.find(post => post.id === postId));

    const [formData, setFormData] = useState({ title: post.title, body: post.body });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData(formData => ({
      ...formData,
      [name]: value
    }));
  }


    const handleSubmit = (event) => {
        event.preventDefault();
    }

    return (
        <div>
            <h1>Edit Post</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Title:
                    <input type="text" name="title" value={formData.title} onChange={handleInputChange} />
                </label>
                <label>
                    Body:
                    <textarea name="body" value={formData.body} onChange={handleInputChange} />
                </label>
                <button type="submit">Save Changes</button>
            </form>
        </div>
    );
}

export default editPost;
