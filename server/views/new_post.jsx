const React = require('react');
const Default = require('./layouts/Default');


const NewPost = ({post}) => {
  return (
    <Default>
      <h2>Add a new post</h2>
      <div>
        <a href="/posts"><button>go back to index</button></a>
      </div>
      <form action="/posts" method="POST">
        <label htmlFor="title">Title</label>
        <input
          type="text"
          name="title"
          id="title"
          required
        />
        <label htmlFor="author">Author</label>
        <input
          type="text"
          name="author"
          id="author"
          required
        />
        <label htmlFor="date">Date</label>
        <input
          type="text"
          name="date"
          id="date"
        />
        <label htmlFor="destination">Destination</label>
        <input
          type="text"
          name="destination"
          id="destination"
        />
        <label htmlFor="postContent">Content</label>
        <input
          type="text"
          name="postContent"
          id="postContent"
        />
        <label htmlFor="imageURL">Image URL</label>
        <input
          type="text"
          name="imageURL"
          id="imageURL"
        />
        <br />
        <input type="submit" />
      </form>
    </Default>
  )
};

module.exports = NewPost;