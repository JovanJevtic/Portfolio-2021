const modalMenuToggle = () => {
    const btn = document.getElementById('hamburger-menu');
    const modalMenu = document.getElementsByClassName('modal-menu')[0];

    btn.addEventListener('click', () => {
        modalMenu.classList.toggle('modal-menu-active');
    });
}

export default modalMenuToggle;