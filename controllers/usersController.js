/* eslint-disable no-console */
const { githubBaseInfo, githubRepos } = require('./githubController');

let allUsers = [
    {
        github_id: 'octocat',
        linkedin_id: '',
        codechef_id: '',
        hackerrank_id: '',
        twitter_id: '',
        medium_id: '',
        id: 'octocat',
        avatar_url: 'https://avatars.githubusercontent.com/u/583231?v=4',
        name: 'The Octocat',
        company: '@github',
        blog: 'https://github.blog',
        location: 'San Francisco',
        email: null,
        bio: 'building life again',
        repos: [
            {
                name: 'boysenberry-repo-1',
                html_url: 'https://github.com/octocat/boysenberry-repo-1',
                description: 'Testing',
                updated_at: '2021-05-15T21:50:42Z',
            },
            {
                name: 'git-consortium',
                html_url: 'https://github.com/octocat/git-consortium',
                description: 'This repo is for demonstration purposes only.',
                updated_at: '2021-05-15T21:50:39Z',
            },
            {
                name: 'hello-worId',
                html_url: 'https://github.com/octocat/hello-worId',
                description: 'My first repository on GitHub.',
                updated_at: '2021-05-26T20:27:34Z',
            },
            {
                name: 'Hello-World',
                html_url: 'https://github.com/octocat/Hello-World',
                description: 'My first repository on GitHub!',
                updated_at: '2021-06-06T15:23:50Z',
            },
            {
                name: 'linguist',
                html_url: 'https://github.com/octocat/linguist',
                description:
                    "Language Savant. If your repository's language is being reported incorrectly, send us a pull request!",
                updated_at: '2021-05-28T12:38:07Z',
            },
            {
                name: 'octocat.github.io',
                html_url: 'https://github.com/octocat/octocat.github.io',
                description: null,
                updated_at: '2021-05-15T21:50:36Z',
            },
            {
                name: 'Spoon-Knife',
                html_url: 'https://github.com/octocat/Spoon-Knife',
                description: 'This repo is for demonstration purposes only.',
                updated_at: '2021-06-09T08:59:35Z',
            },
            {
                name: 'test-repo1',
                html_url: 'https://github.com/octocat/test-repo1',
                description: null,
                updated_at: '2021-06-02T10:41:53Z',
            },
        ],
    },
    {
        github_id: 'gcnit',
        linkedin_id: 'https://linkedin.com/',
        codechef_id: 'https://codechef.com/',
        hackerrank_id: 'https://www.hackerrank.com/',
        twitter_id: 'https://twitter.com/',
        medium_id: 'https://medium.com/',
        id: 'gcnit',
        avatar_url: 'https://avatars.githubusercontent.com/u/4833751?v=4',
        name: 'Gaurav Chandak',
        company: 'workat.tech',
        blog: 'https://workat.tech',
        location: 'Bangalore, India',
        email: 'shivama5tronot@gmail.com',
        bio: 'Building workat.tech;\r\nPreviously Software Engineer at  @Flipkart, @microsoft and @tracxn',
        repos: [
            {
                name: 'awesome-learn-to-code',
                html_url: 'https://github.com/gcnit/awesome-learn-to-code',
                description: 'A list of awesome resources for learning to code',
                updated_at: '2021-03-11T04:24:18Z',
            },
            {
                name: 'beta.sdeskills.com',
                html_url: 'https://github.com/gcnit/beta.sdeskills.com',
                description: 'Beta SDE Skills site',
                updated_at: '2020-06-08T08:19:59Z',
            },
            {
                name: 'Birthdpy',
                html_url: 'https://github.com/gcnit/Birthdpy',
                description:
                    'This script thanks everyone who have wished you on your birthday on your facebook timeline',
                updated_at: '2017-10-11T04:05:01Z',
            },
            {
                name: 'code-template',
                html_url: 'https://github.com/gcnit/code-template',
                description: null,
                updated_at: '2021-05-07T12:07:18Z',
            },
            {
                name: 'Comment-Liker',
                html_url: 'https://github.com/gcnit/Comment-Liker',
                description:
                    'Placed? Everyone congratulating you on your status update? Like all their comments automatically with this script!',
                updated_at: '2014-10-25T19:41:51Z',
            },
            {
                name: 'Competitive-Programming',
                html_url: 'https://github.com/gcnit/Competitive-Programming',
                description: 'My solutions to algorithmic problems on Competitive Programming websites',
                updated_at: '2020-12-19T15:23:40Z',
            },
            {
                name: 'Competitive-Programming-Resources',
                html_url: 'https://github.com/gcnit/Competitive-Programming-Resources',
                description: 'Competitive Programming & System Design Resources.',
                updated_at: '2021-05-23T13:45:33Z',
            },
            {
                name: 'conclave',
                html_url: 'https://github.com/gcnit/conclave',
                description: 'CRDT and WebRTC based real-time, peer-to-peer, collaborative text editor',
                updated_at: '2020-04-07T18:40:56Z',
            },
            {
                name: 'design-patterns-for-humans',
                html_url: 'https://github.com/gcnit/design-patterns-for-humans',
                description: 'An ultra-simplified explanation to design patterns',
                updated_at: '2019-09-05T16:46:52Z',
            },
            {
                name: 'Design-Patterns-Implementation',
                html_url: 'https://github.com/gcnit/Design-Patterns-Implementation',
                description: 'Implementations of Common Design Patterns',
                updated_at: '2017-11-26T07:35:43Z',
            },
            {
                name: 'developer-roadmap',
                html_url: 'https://github.com/gcnit/developer-roadmap',
                description: 'Roadmap to becoming a web developer in 2018',
                updated_at: '2019-01-30T06:24:48Z',
            },
            {
                name: 'gcnit',
                html_url: 'https://github.com/gcnit/gcnit',
                description: null,
                updated_at: '2020-08-15T20:31:18Z',
            },
            {
                name: 'gcnit.github.io',
                html_url: 'https://github.com/gcnit/gcnit.github.io',
                description: null,
                updated_at: '2019-11-12T16:52:28Z',
            },
            {
                name: 'get-a-software-engineering-job',
                html_url: 'https://github.com/gcnit/get-a-software-engineering-job',
                description: 'Get a Software Engineering Job - Ultimate Guide',
                updated_at: '2020-08-16T10:53:19Z',
            },
            {
                name: 'Implementations',
                html_url: 'https://github.com/gcnit/Implementations',
                description: null,
                updated_at: '2017-11-22T17:36:47Z',
            },
            {
                name: 'learn-to-program',
                html_url: 'https://github.com/gcnit/learn-to-program',
                description: 'Educational resources to learn to program (Foundation in Web Development)',
                updated_at: '2020-08-12T18:28:02Z',
            },
            {
                name: 'learn_to_code',
                html_url: 'https://github.com/gcnit/learn_to_code',
                description: 'Resources for budding developers',
                updated_at: '2020-08-12T18:30:07Z',
            },
            {
                name: 'Like-All-Posts',
                html_url: 'https://github.com/gcnit/Like-All-Posts',
                description: 'This script likes all the posts made by an user or a page on their facebook timeline',
                updated_at: '2016-08-07T05:48:03Z',
            },
            {
                name: 'low-level-design',
                html_url: 'https://github.com/gcnit/low-level-design',
                description: 'This repository contains some programs for learning OOD using c++',
                updated_at: '2021-06-04T18:01:24Z',
            },
            {
                name: 'low-level-design-primer',
                html_url: 'https://github.com/gcnit/low-level-design-primer',
                description:
                    'Dedicated Resources for the Low-Level System Design. Learn how to design and implement large-scale systems. Prep for the system design interview.',
                updated_at: '2021-04-27T19:44:55Z',
            },
            {
                name: 'machinecoding',
                html_url: 'https://github.com/gcnit/machinecoding',
                description: 'Everything about Machine Coding Round',
                updated_at: '2020-03-03T18:31:32Z',
            },
            {
                name: 'mediumish-minimal',
                html_url: 'https://github.com/gcnit/mediumish-minimal',
                description: null,
                updated_at: '2020-03-08T12:34:41Z',
            },
            {
                name: 'mentorship-karona',
                html_url: 'https://github.com/gcnit/mentorship-karona',
                description: 'If you need a session with mentors raise an issue',
                updated_at: '2020-08-31T21:28:33Z',
            },
            {
                name: 'Mind-Expanding-Books',
                html_url: 'https://github.com/gcnit/Mind-Expanding-Books',
                description: ' :books: Books that will blow your mind ',
                updated_at: '2019-01-30T06:24:59Z',
            },
            {
                name: 'mock-machine-coding-1',
                html_url: 'https://github.com/gcnit/mock-machine-coding-1',
                description: null,
                updated_at: '2021-05-30T13:10:49Z',
            },
            {
                name: 'NITMDb',
                html_url: 'https://github.com/gcnit/NITMDb',
                description: 'A script that helps you get your movie collection sorted based on their IMDb ratings',
                updated_at: '2018-05-26T09:25:37Z',
            },
            {
                name: 'pdfkit-invoice',
                html_url: 'https://github.com/gcnit/pdfkit-invoice',
                description: 'Generate PDF Invoices with PDFKit',
                updated_at: '2020-08-14T11:02:56Z',
            },
            {
                name: 'problemsolving',
                html_url: 'https://github.com/gcnit/problemsolving',
                description: 'Everything about the Problem Solving & Data Structures Round',
                updated_at: '2020-03-12T20:49:45Z',
            },
            {
                name: 'product-search',
                html_url: 'https://github.com/gcnit/product-search',
                description: null,
                updated_at: '2020-02-02T08:52:35Z',
            },
            {
                name: 'programming-principles',
                html_url: 'https://github.com/gcnit/programming-principles',
                description: 'Categorized overview of Programming Principles & Patterns',
                updated_at: '2019-01-30T06:24:57Z',
            },
        ],
    },
];

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
