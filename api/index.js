const express = require('express');
const app = express();
const comments = require('./routes/comments.js');
const user = require('./routes/user.js')
const recommendation = require('./routes/recommendation.js');

app.use(express.json());
// app.use('api/v1/data', data);
app.use('/api/v1/requests/comments', comments);
app.use('/api/v1/user', user)
app.use('/api/v1/recommendation', recommendation)

app.listen(process.env.PORT || 4000, console.log('we are running on port 4000'))