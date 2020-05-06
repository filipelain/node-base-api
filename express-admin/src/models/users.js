const modelUser = {};


let user = {
    id: '0',
    name: 'João',
    surName: 'Ninguem'
};

let users = [user];

modelUser.find = (id) => {
    if (id == undefined) {
        return error = {status: '404', message: 'user not found'}
    }
    user = this.findById(id);
    if (!user) {
        return error = {status: '404', message: 'user not found'}
    }
    return {status: '200', user}
};


modelUser.getAll = () => {
    return users;
};

modelUser.findById = (id) => {
    user.id = id;
    return user
};

module.exports = modelUser;



