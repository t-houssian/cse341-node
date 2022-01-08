const fs = require('fs');

const requestHandler = (req, res) => {
    const url = req.url;
    const method = req.method;

    if (url === '/'){
        res.write(`<html>
            <head>
                <title>Enter Message</title>
            </head>
                <body>
                    <form action="/create-user" method="POST"><input type="text" name="username"><button type="submit">Send</button></form></body>
                </body>
        </html>`);
        return res.end();
    }
    if (url === '/create-user' && method === 'POST') {
        const body = [];
        req.on('data', (chunk) =>{
            body.push(chunk);
        });
        req.on('end', () =>{
            const parsedBody = Buffer.concat(body).toString();
            const username = parsedBody.split('=')[1];
            console.log(username);
        });
        res.statusCode = 302;
        res.setHeader('Location', '/');
        res.end()
    }
    if (url === '/users'){
        res.setHeader('Content-Type', 'text/html');
        res.write(`<html>
            <head>
                <title>My Page</title>
            </head>
                <body>
                    <ul>
                    <li>User 1</li>
                    <li>User 2</li>
                    </ul>
                </body>
        </html>`);
        return res.end();
    }
    if (url === '/users-2'){
        res.setHeader('Content-Type', 'text/html');
        res.write(`<html>
            <head>
                <title>My Page</title>
            </head>
                <body>
                    <ul>
                    <li>New User 1</li>
                    <li>New User 2</li>
                    <li>New User 3</li>
                    </ul>
                </body>
        </html>`);
        return res.end();
    }
}

module.exports = requestHandler;