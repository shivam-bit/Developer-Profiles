/* eslint-disable no-console */
window.onload = () => {
    const triggerBtn = document.querySelector('.add-dev-section__btn');
    const modalBox = document.querySelector('.modal');
    const closeBtn = document.querySelector('.close-button');
    triggerBtn.addEventListener('click', () => {
        console.log('event attached');
        modalBox.classList.add('show-modal');
    });
    closeBtn.addEventListener('click', () => {
        console.log('event attached');
        modalBox.classList.remove('show-modal');
    });
};
