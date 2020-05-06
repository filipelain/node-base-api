const app = require("express")();
const consing = require("consign");
const auth = require('./src/auth/auth');

const port = 3000;
const host = '0.0.0.0';



app.get('/', auth.isAuthenticated, (req, res) => res.status(200).send({
    'service': 'ok'
}));

const userRouter = require('./src/routers/users');
app.use('/users',userRouter);

const server = app.listen(port, host, () => console.log(`Example app listening on port ${port}!`));

module.exports = server;
