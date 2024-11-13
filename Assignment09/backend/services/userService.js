const users = [
    { username: 'user1', password: 'password1' },
    { username: 'user2', password: 'password2' }
];

exports.authenticate = (username, password) => {
    return users.find(user => user.username === username && user.password === password);
};
