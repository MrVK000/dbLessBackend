require('dotenv').config();  // Load environment variables

const cors = require('cors');
const express = require('express');
const app = express();
const router = require('./router');
const port = 8000;

app.use(cors()); // Allow CORS

app.options('*', cors()); // Allow preflight requests for all routes

app.use(express.json());
app.use('/', router);

app.listen(port, () => {
    console.log(`Server is listening at ${port}>>>`);
});
