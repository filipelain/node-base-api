const app = require("express")();
const auth = require('./src/auth/auth');



app.get('/', auth.isAuthenticated, (req, res) => res.status(200).send({
    'service': 'ok'
}));

const userRouter = require('./src/routers/users');
app.use('/users',userRouter);


module.exports = app;
