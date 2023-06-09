const React = require('react');
const Default = require('./layouts/default');

function ShowPost ({post}) {
    return (
      <Default>
        <h3>{post.title}</h3>
        <form action={`/posts/${post.id}?_method=DELETE`} method="POST">
              <input type='submit' value="DELETE"/>
        </form>
        <a href={`/posts/${post.id}/edit`}><button>Edit</button></a>
        <p>{post.author}</p>
        <p>{post.date}</p>
        <p>{post.destination}</p>
        <p>{post.postContent}</p>
        <img src={post.imageURL} />
      </Default>
    )
};

module.exports = ShowPost;