/* eslint-disable no-unused-vars */
const handle = (req, res) => {
    console.log(req.app.locals.title);
    res.send('Your are now on home page');
};

module.exports = handle;
