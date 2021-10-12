/* eslint-disable comma-dangle */
const express = require('express');

const app = express();

// app.use(express.json());
// app.use(express.raw());
// app.use(express.urlencoded());
app.use(
    express.static(`${__dirname}/public/`, {
        index: 'home.html',
    })
);

const router = express.Router();
app.use(router);

// router.get('/', (req, res) => {
//     // something is here
// });

app.get('/', (req, res) => {
    res.send('Your are now on home page');
});

app.post('/', (req, res) => {
    console.log(req.body);
    res.send('Welcome to home page');
});

app.listen(3000, () => {
    console.log('listening on port 3000');
});
