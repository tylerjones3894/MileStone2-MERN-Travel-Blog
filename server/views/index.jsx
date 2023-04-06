const React = require('react');
const Default = require('./layouts/Default');

const Index = ({post, title}) => {
    return (
        <Default title={title}>
            <h2>Posts</h2>
            <ul>
                {post.map(post => (
                    <li key={post.id}>
                        <a href={`/posts/${post.id}`}>
                            {post.title}
                        </a>
                    </li>
                ))}
            </ul>
        </Default>
    )
};

module.exports = Index;