/* eslint-disable no-console */

const githubIcon = './Assets/Profile_Icons/iconfinder_github_317712.png';
const hackerrankIcon = './Assets/Profile_Icons/iconfinder_160_Hackerrank_logo_logos_4373234.png';
const codechefIcon = './Assets/Profile_Icons/codechef-1324440139527402917_32.png';
const linkedinIcon = './Assets/Profile_Icons/iconfinder_2018_social_media_popular_app_logo_linkedin_3225190.png';
const twitterIcon = './Assets/Profile_Icons/iconfinder_2018_social_media_popular_app_logo_twitter_3225183.png';
const emailIcon = './Assets/Profile_Icons/email-24px.svg';
const mediumIcon = './Assets/Profile_Icons/iconfinder_Circled_Medium_svg5_5279113.png';
const locationIcon = './Assets/Icons _ Illustrations/location_on-24px.svg';
const companyIcon = './Assets/Icons _ Illustrations/business-24px.svg';
const blogIcon = './Assets/Icons _ Illustrations/insert_link-24px (1).svg';
const linkIcon = './Assets/Icons _ Illustrations/north_east-24px.svg';
let user;

fetch(`/api/developers${window.location.pathname}`)
    .then((resp) => resp.json())
    .then((resp) => {
        user = resp;
    });
const dateFormatter = (date) => {
    const newDateObj = new Date(date);
    const month = newDateObj.toLocaleString('default', { month: 'long' });
    const numDate = newDateObj.getDate();
    const year = newDateObj.getFullYear();
    return `${numDate} ${month} ${year}`;
};
const renderProfileImage = (renderLocation) => {
    renderLocation.src = user.avatar_url;
};
const renderData = (data, renderDataLocation) => {
    renderDataLocation.textContent = data;
};
const renderIcons = (data, icon) => {
    const iconImage = document.createElement('img');
    iconImage.src = icon;
    iconImage.classList.add('user-profiles__item');
    const link = document.createElement('a');
    link.href = data;
    link.appendChild(iconImage);
    // console.log(link);
    return link;
};
const renderUserProfiles = (renderProfilesLocaion) => {
    if (user.hackerrank_id) {
        renderProfilesLocaion.appendChild(renderIcons(user.hackerrank_id, hackerrankIcon));
    }
    if (user.codechef_id) {
        renderProfilesLocaion.appendChild(renderIcons(user.codechef_id, codechefIcon));
    }
    if (user.linkedin_id) {
        renderProfilesLocaion.appendChild(renderIcons(user.linkedin_id, linkedinIcon));
    }
    if (user.medium_id) {
        renderProfilesLocaion.appendChild(renderIcons(user.medium_id, mediumIcon));
    }
    if (user.twitter_id) {
        renderProfilesLocaion.appendChild(renderIcons(user.twitter_id, twitterIcon));
    }
    if (user.email) {
        renderProfilesLocaion.appendChild(renderIcons(user.email, emailIcon));
    }
};
const renderInfo = (data, icon) => {
    const parentDiv = document.createElement('div');
    const iconImage = document.createElement('img');
    const divContent = document.createElement('div');
    iconImage.src = icon;
    divContent.textContent = data;
    parentDiv.classList.add('user-additional-info__item');
    parentDiv.appendChild(iconImage);
    parentDiv.appendChild(divContent);
    return parentDiv;
};

const renderAddInfo = (userAddInfo) => {
    if (user.location) {
        userAddInfo.appendChild(renderInfo(user.location, locationIcon));
    }
    if (user.company) {
        userAddInfo.appendChild(renderInfo(user.company, companyIcon));
    }
    if (user.blog) {
        userAddInfo.appendChild(renderInfo(user.blog, blogIcon));
    }
};

const renderRepo = (repo) => {
    const parentDiv = document.createElement('div');
    const nameDiv = document.createElement('div');
    const lastUpdatedDiv = document.createElement('div');
    const descriptionDiv = document.createElement('div');
    parentDiv.classList.add('user-repo');
    nameDiv.classList.add('user-repo__name');
    lastUpdatedDiv.classList.add('user-repo__last-updated');
    descriptionDiv.classList.add('user-repo__description');
    nameDiv.textContent = repo.name;
    lastUpdatedDiv.textContent = dateFormatter(repo.updated_at);
    descriptionDiv.textContent = repo.description;
    const linkDiv = document.createElement('div');
    const linkEle = document.createElement('a');
    const linkImage = document.createElement('img');
    linkDiv.classList.add('user-repo__link');
    linkImage.src = linkIcon;
    linkImage.classList.add('user-repo__link-icon');
    linkEle.href = repo.html_url;
    linkEle.appendChild(linkImage);
    linkDiv.appendChild(linkEle);
    nameDiv.appendChild(linkDiv);
    parentDiv.append(nameDiv, lastUpdatedDiv, descriptionDiv);
    return parentDiv;
};
const renderRepos = (gitRepos) => {
    const { repos } = user;
    repos.forEach((element) => {
        gitRepos.appendChild(renderRepo(element));
    });
};

window.onload = () => {
    // console.log(user);
    const profileImage = document.querySelector('.profile-image');
    renderProfileImage(profileImage);
    const userName = document.querySelector('.user-name');
    renderData(user.name, userName);
    const userBio = document.querySelector('.user-tagline');
    renderData(user.bio, userBio);
    const userProfiles = document.querySelector('.user-profiles');
    renderUserProfiles(userProfiles);
    const userAddInfo = document.querySelector('.user-additional-info');
    renderAddInfo(userAddInfo);
    const gitRepos = document.querySelector('.user-repos-list');
    renderRepos(gitRepos);
};
