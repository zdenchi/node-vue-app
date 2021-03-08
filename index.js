const express = require('express');
const app = express();
const host = 'localhost';
const port = '3000';

// We'll use the public directory to serve the Vue App
app.use(express.static('public'));

app.listen(port, () => {
 console.log(`App listening on http://${host}:${port}`);
});
