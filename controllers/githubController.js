/* eslint-disable no-console */
const { default: axios } = require('axios');

const baseUrl = 'https://api.github.com/users/';

exports.githubBaseInfo = (userName) => axios.get(baseUrl + userName);
exports.githubRepos = (userName) =>
    axios.get(`${baseUrl + userName}/repos`).then((resp) => {
        // console.log(resp.data.length);
        const arr = [];
        resp.data.forEach((repos) => {
            arr.push({
                name: repos.name,
                html_url: repos.html_url,
                description: repos.description,
                updated_at: repos.updated_at,
            });
        });
        return arr;
    });
