/* eslint-disable no-console */
const { githubBaseInfo, githubRepos } = require('./githubController');

let allUsers = [];

const constructDevProfile = async (data, reqBody) => {
    const devObj = { ...reqBody };
    devObj.id = data.login;
    devObj.avatar_url = data.avatar_url;
    devObj.name = data.name;
    devObj.company = data.company;
    devObj.blog = data.blog;
    devObj.location = data.location;
    devObj.email = data.email;
    devObj.bio = data.bio;
    devObj.repos = await githubRepos(data.login);
    return devObj;
};
exports.addUser = (req, res, next) => {
    if (req.body.github_id === '') {
        res.status(400).send(JSON.stringify('Github username is required'));
        return;
    }
    githubBaseInfo(req.body.github_id)
        .then((response) => constructDevProfile(response.data, req.body))
        .then((newDevObj) => {
            allUsers.push(newDevObj);
            return newDevObj;
        })
        .then((DevObj) => res.send({ id: DevObj.id }))
        .catch((error) => {
            // console.log(error.response.status);
            if (error.response.status === 404) {
                res.status(400).send(JSON.stringify('GitHub username is invalid'));
            } else {
                res.status(500).send(JSON.stringify('Internal server error'));
            }
        });
};
exports.getUser = (req, res, next) => {
    const user = allUsers.filter((element) => {
        if (req.params.id === element.id) {
            return element;
        }
        return false;
    });
    if (user.length === 0) {
        res.status(404).send(JSON.stringify('User does not exist'));
    } else {
        res.send(user[0]);
    }
};

exports.getAllUsers = (req, res, next) => {
    const allDevs = allUsers.map((user) => {
        const obj = { id: user.id, avatar_url: user.avatar_url };
        return obj;
    });
    res.send(allDevs);
};

exports.deleteUser = (req, res, next) => {
    allUsers = allUsers.filter((user) => user.id !== req.params.id);
    res.status(204).send(JSON.stringify('User deleted'));
};
