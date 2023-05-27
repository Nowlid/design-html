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
        menu.querySelectorAll('nav > li').forEach(e => (e.classList[(
            menuState
                && e.classList.contains('current')
                && e.children[1] instanceof HTMLUListElement
        ) ? 'add' : 'remove']('expand')));
        menuState = !menuState;
    });

    // Expandable menu
    nav.querySelectorAll('li > ul').forEach(a => {
        a.parentElement.querySelector('a').addEventListener('click', b => {
            b.preventDefault();
            a.parentElement.classList.contains('current')
                || menuState
                || a.parentElement.classList.toggle('expand');
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

    // tables fix
    const fixTables = () => main.querySelectorAll("table.table-panel-style").forEach(e => (
        e.parentElement.style.overflow = (
            Math.sign(e.parentElement.clientWidth - e.clientWidth - 50) !== 1
                ? "hidden" : "auto"
        )
    ));

    const execResizeMethods = () => (resizeBanner(), defMainMin(), fixTables());

    setTimeout(execResizeMethods);
    setTimeout(fixTables, 500);
    window.addEventListener('resize', execResizeMethods);

    // Page specific rules
    switch (main.id.toLowerCase().slice(0, -5)) {
        case "reviews":
            const resizeContainer = () => document.getElementById('reviews').style.setProperty('--i',
                main.style.getPropertyValue('min-height')
            );
            setTimeout(resizeContainer);
            window.addEventListener('resize', resizeContainer);
            break;

        default: break;
    }
});
