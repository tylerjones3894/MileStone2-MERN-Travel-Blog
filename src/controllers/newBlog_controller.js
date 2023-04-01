import React, { useState } from 'react';

function NewBlogPostController() {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    function handleSubmit(event) {
        event.preventDefault();

        const data = { title, body };

        fetch('/api/posts', {
            method: 'POST',
            headers: {'Conent-Type': 'application/json' },
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            setTitle('');
            setBody('');
        });
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor='title'>title:</label>
                <input
                    type='text'
                    id='title'
                    value={title}
                    onChange={event => setTitle(event.target.value)}
                />
            </div>
            <div>
                <label htmlFor='body'>body:</label>
                <textarea
                id='body'
                value={body}
                onChange={event => setBody(event.target.value)}
                />
            </div>
            <button type='submit'>Create Post</button>
        </form>
    );
}


export default NewBlogPostController;