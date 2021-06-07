/* eslint-disable no-console */
fetch(`/api/developers${window.location.pathname}`)
    .then((resp) => resp.json())
    .then((resp) => console.log(resp));
window.onload = () => {
    console.log(window.location.pathname);
};
