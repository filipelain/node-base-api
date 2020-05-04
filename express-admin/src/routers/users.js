module.exports = app => {
    const user = app.controllers.users;    
    app.get('/users', user.index)
    return this;
}
