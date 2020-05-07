const app = require('./app');
const port = 3000;
const host = '0.0.0.0';

const server = app.listen(port, host, () => console.log(`Example app listening on port ${port}!`));

module.exports = server;
