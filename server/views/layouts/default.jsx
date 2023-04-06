const React = require(react);

import Navbar from '../components/Navbar';

const Default = (html) => {
    return (
        <html>
            <head>
                <title>{html.title || 'Default'}</title>
            </head>
            <body>
                <Navbar />
                <div>
                    <header>
                        <h1><a href="/posts">Blog Posts</a></h1>
                    </header>
                    <div>
                        {html.children}
                    </div>
                </div>
            </body>
        </html>
    )
};

module.exports = Default;