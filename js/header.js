const modalMenuToggle = () => {
    const btn = document.getElementById('hamburger-menu');
    const modalMenu = document.getElementsByClassName('modal-menu')[0];
    const btnLines = document.querySelectorAll('.hamburger-menu-line');

    btn.addEventListener('click', () => {
        modalMenu.classList.toggle('modal-menu-active');
        console.log(btnLines)

        btnLines.forEach(el => {
            el.classList.toggle('hamburger-menu-line-active');
            console.log(el)
        });
    });
}

export default modalMenuToggle;