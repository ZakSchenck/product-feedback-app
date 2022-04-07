const express = require('express');
const app = express();
const comments = require('./routes/comments.js');

app.use(express.json());
// app.use('api/v1/data', data);
app.use('/api/v1/comments', comments);


app.listen(4000, console.log('we are running on port 4000'))