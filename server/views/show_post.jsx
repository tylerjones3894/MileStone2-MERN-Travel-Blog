const React = require('react');

function ShowPost ({post}) {
    return (
      <div>
        <h3>{post.title}</h3>
        <form action={`/posts/${post.id}?_method=DELETE`} method="POST">
              <input type='submit' value="DELETE"/>
        </form>
        <a href={`/posts/${post.id}/edit`}><button>Edit</button></a>

      </div>
    )
}

module.exports = ShowPost