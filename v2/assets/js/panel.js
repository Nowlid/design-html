window.addEventListener('load', () => {
    const header = document.body.querySelector('header');
    const menu = document.body.querySelector('menu');
    const nav = menu.querySelector('nav');
    const main = document.body.querySelector('main');
    const footer = document.body.querySelector('footer');

    var menuState = 0;

    // Expand or not menu
    header.querySelector('button.carret').addEventListener('click', () => {
        document.body.classList[menuState ? 'add' : 'remove']('expand-menu');
        menu.querySelectorAll('nav > li').forEach(e => e.classList.remove('expand'));
        menuState = !menuState;
    });
    header.querySelector('button.carret').click();

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

    // Ad banner
    const resizeBanner = () => {
        main.querySelector('#ad-banner > div.fix').style.height =
            (main.querySelector('#ad-banner > div.content').clientHeight - 10).toString() + "px";
    };

    // main min-heigth
    const defMainMin = () => main.style.minHeight = (
        window.innerHeight - 61 // header + fix + ad-banner
        - footer.clientHeight // footer
        - main.querySelector('#ad-banner > div.fix').clientHeight // ad-banner
    ).toString() + "px";

    resizeBanner();
    defMainMin();
    window.addEventListener('resize', resizeBanner);
    window.addEventListener('resize', defMainMin);

    // Page specific rules
    switch (main.id.toLowerCase()) {
        case "tasks":
            main.querySelectorAll('#tasks-list > table > tbody > tr > td').forEach(e => (
                e.classList.contains('progress') && (e.querySelector('span').innerHTML += ` (${
                    e.style.getPropertyValue('--size')
                })`)
            ));
            break;

        default: break;
    }
});
