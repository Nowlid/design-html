window.addEventListener('load', () => {
    const header = document.body.querySelector('header');
    const menu = document.body.querySelector('menu');
    const nav = menu.querySelector('nav');
    const main = document.body.querySelector('main');

    var menuState = 0;

    // Expand or not menu
    header.querySelector('button.carret').addEventListener('click', () => {
        document.body.classList[menuState ? 'add' : 'remove']('expand-menu');
        menu.querySelectorAll('nav > li').forEach(e => e.classList.remove('expand'));
        menuState = !menuState;
    });

    // Expandable menu
    nav.querySelectorAll('li > ul').forEach(a => {
        a.parentElement.querySelector('a').addEventListener('click', b => {
            b.preventDefault();
            menuState || a.parentElement.classList.toggle('expand');
            b.currentTarget.blur();
        });
    });

    // Header dropdowns
    header.querySelectorAll('.sidebar > div').forEach(a => {
        a.querySelector('button').addEventListener('click', b => {
            b.currentTarget.blur();
            a.blur();

            header.querySelectorAll('.dropdown').forEach(e => (
                e.classList[e === a.querySelector('.dropdown') ? "toggle" : "remove"]('active')
            ));
        });
    });

    // Shop banner
    const resizeBanner = () => {
        main.querySelector('#shop-banner > div.fix').style.height =
            (main.querySelector('#shop-banner > div.content').clientHeight - 10).toString() + "px";
    };

    resizeBanner();
    document.addEventListener('scroll', resizeBanner);
    window.addEventListener('resize', resizeBanner);
});
