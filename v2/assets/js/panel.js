window.addEventListener('load', () => {
    const header = document.body.querySelector('header');
    const menu = document.body.querySelector('menu');
    const nav = menu.querySelector('nav');

    // Expand or not menu
    header.querySelector('button.carret').addEventListener('click', () => (
        document.body.classList.toggle('expand-menu')
    ));

    // Expandable menu
    nav.querySelectorAll('li > ul').forEach(a => {
        a.parentElement.classList.add('purple');
        a.parentElement.querySelector('a').addEventListener('click', b => {
            b.currentTarget.classList.toggle('expand');
            b.currentTarget.blur();
        });
    });
});
