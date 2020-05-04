module.exports = app =>{
    User = app.models.users;
    this.index = (req,resp)=>{
      return resp.status(401).send('not Authorized');
    }
    return this;
}