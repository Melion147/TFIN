const bars2 = document.querySelector('.menu-bars');
const nav = document.querySelector('.n-links');
const main_cnt = document.querySelector('.main-content');
const footer = document.querySelector('.footer');

const onclick_fuck = () => {
    bars2.addEventListener('click', () => {
        nav.classList.toggle('n-active');
        bars2.classList.toggle('toggle');
        main_cnt.classList.toggle('blur');
        footer.classList.toggle('blur');
    })
}
onclick_fuck();
////////////////////////////////////////////////////////////