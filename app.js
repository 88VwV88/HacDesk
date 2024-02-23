const express = require('express');
const morgan = require('morgan');
const app = express();
const port = 3000;

app.use(morgan("tiny"));

app.use(express.static('./public'));

app.route('/', (_, res) => {
    res.sendFile('index.html');
});

app.listen(port, () => {
    console.log(`HackDesk running on port ${port}`)
})