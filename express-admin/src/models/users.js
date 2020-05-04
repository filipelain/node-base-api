module.exports = app => {

    let user = {
        id: '0',
        name: 'João',
        surName: 'Ninguem'
    }

    let users = [user]

    this.find = (id) => {
        if (id == undefined) {
            return getAll();
        }
    }

    function getAll() {
        return users;
    }

    function findById(id) {
        user.id = id;
        return user
    }


        return this;


}