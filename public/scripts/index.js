/* eslint-disable no-console */
let users = [];
fetch('/api/developers/')
    .then((resp) => resp.json())
    .then((arr) => {
        users = arr;
        return users;
    })
    .then((arr) => console.log(arr));
const createDevProfile = (user) => {
    const userDiv = document.createElement('div');
    const userImage = document.createElement('img');
    const userId = document.createElement('div');
    const linkImage = document.createElement('img');
    userDiv.classList.add('dev-profile');
    userImage.src = user.avatar_url;
    userImage.classList.add('dev-profile__Image');
    userId.classList.add('dev-profile__userName');
    userId.textContent = user.id;
    linkImage.src = './Assets/Icons _ Illustrations/north_east-24px.svg';
    linkImage.classList.add('dev-profile__link');
    userDiv.append(userImage, userId, linkImage);
    return userDiv;
};
const clearForm = (github, linkedin, codechef, hackerrank, twitter, medium, errorBox) => {
    errorBox.textContent = '';
    errorBox.style.display = 'none';
    github.value = '';
    linkedin.value = '';
    codechef.value = '';
    hackerrank.value = '';
    twitter.value = '';
    medium.value = '';
};
const addUser = (github_id, linkedin_id, codechef_id, hackerrank_id, twitter_id, medium_id, errorBox, modalBox) => {
    fetch('/api/developers', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ github_id, linkedin_id, codechef_id, hackerrank_id, twitter_id, medium_id }),
    })
        .then((resp) => {
            if (resp.status !== 400) {
                return resp;
            }
            const err = new Error('GitHub username is invalid');
            err.response = resp;
            err.status = resp.status;
            throw err;
        })
        .then((resp) => resp.json())
        .then((resp) => {
            errorBox.style.display = 'none';
            modalBox.classList.remove('show-modal');
        })
        .catch((error) => {
            errorBox.textContent = error.message;
            errorBox.style.display = 'block';
        });
};
window.onload = () => {
    const triggerBtn = document.querySelector('.add-dev-section__btn');
    const modalBox = document.querySelector('.modal');
    const closeBtn = document.querySelector('.close-button');
    const devProfilesSection = document.querySelector('.dev-profiles-section');
    const submitBtn = document.querySelector('.submit-button');
    const finderBtn = document.querySelector('#finderIcon');
    const searchBar = document.querySelector('.searcBar__inputSpace');
    const github = document.querySelector('#Github');
    const linkedin = document.querySelector('#Linkedin');
    const codechef = document.querySelector('#Codechef');
    const hackerrank = document.querySelector('#Hackerrank');
    const twitter = document.querySelector('#Twitter');
    const medium = document.querySelector('#Medium');
    const errorBox = document.querySelector('.error-box');
    triggerBtn.addEventListener('click', () => {
        modalBox.classList.add('show-modal');
    });
    closeBtn.addEventListener('click', () => {
        modalBox.classList.remove('show-modal');
        clearForm(github, linkedin, codechef, hackerrank, twitter, medium, errorBox);
    });
    submitBtn.addEventListener('click', () => {
        addUser(
            github.value,
            linkedin.value,
            codechef.value,
            hackerrank.value,
            twitter.value,
            medium.value,
            errorBox,
            modalBox,
        );
        clearForm(github, linkedin, codechef, hackerrank, twitter, medium, errorBox);
    });
    finderBtn.addEventListener('click', () => {
        const devsArr = Array.from(devProfilesSection.children);
        devsArr.forEach((dev) => {
            const username = dev.querySelector('.dev-profile__userName').textContent;
            if (username !== searchBar.value) {
                dev.style.display = 'none';
            }
        });
        searchBar.addEventListener('input', () => {
            if (searchBar.value.length === 0) {
                devsArr.forEach((dev) => {
                    const username = dev.querySelector('.dev-profile__userName').textContent;
                    if (username !== searchBar.value) {
                        dev.style.display = 'flex';
                    }
                });
            }
        });
        searchBar.removeEventListener('input');
    });
    users.forEach((user) => {
        const temp = createDevProfile(user);
        devProfilesSection.appendChild(temp);
    });
};
