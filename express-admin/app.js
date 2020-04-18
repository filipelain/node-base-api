const Express  = require("express");
const app = Express()
const port = 3000
const host = '0.0.0.0'



app.get('/', (req, res) => res.status(200).send({'service':'ok'}))

const server =  app.listen(port,host, () => console.log(`Example app listening on port ${port}!`))



module.exports = server;
