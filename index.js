/* eslint-disable comma-dangle */
const express = require('express');
// const handle = require('./handle');

const app = express();

// const admin = express();

// app.use(express.json());
// app.use(express.raw());
// app.use(express.urlencoded());
// app.use(
//     express.static(`${__dirname}/public/`, {
//         index: 'home.html',
//     })
// );

// const router = express.Router();
// app.use(router);

// router.get('/', (req, res) => {
//     // something is here
// });

// app.locals.title = 'My App';

// app.get('/', handle);

// app.post('/', (req, res) => {
//     console.log(req.body);
//     res.send('Welcome to home page');
// });

// app.all('/', (req, res) =>{
//     res.send('something response');
// });

// app.use('/admin', admin);

// app.param('id', (req, res, next, id) => {
//     const user = {
//         userId: id,
//         name: 'Mostafa',
//     };
//     req.userDetails = user;
//     next();
// });

// app.get('/user/:id', (req, res) => {
//     res.send(req.userDetails);
//     // res.send('welcome to application home page');
// });

// admin.get('/about', (req, res) => {
//     res.send('welcome to admin about page');
// });

// app.get('title'); // return undefined
// app.set('title', 'My app');
// app.get('title'); // return My app

app.set('view engine', 'ejs');

app.route('/about/mission/')
    .get((req, res) => {
        res.render('about/about');
    })
    .post((req, res) => {
        res.send('this for post');
    })
    .put((req, res) => {
        res.send('this for put');
    });

app.listen(3000, () => {
    console.log('listening on port 3000');
});
