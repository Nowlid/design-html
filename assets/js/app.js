window.addEventListener('load', () => {
    // Loading animation
    setTimeout(() => {
        AOS.init();
        document.body.classList.add('loaded');
        setTimeout(() => document.querySelector('.loader-container').remove(), 1e3);
    }, 500);

    // AOS on home and projects pages
    if (/home|projects/gi.test(document.body.id))
    document.querySelectorAll('main > section').forEach(e => {
        e.setAttribute('data-aos', 'fade-up');
        e.setAttribute('data-aos-duration', '700');
    });

    // Menu button
    const navBtn = document.querySelector('header button.dropdown');

    navBtn.addEventListener('click', e => {
        navBtn.classList.toggle('active');
        document.querySelector('header nav').classList.toggle('active');
        navBtn.blur();
    });

    setTimeout(() => window.scroll({ top: document.body.clientHeight }));

    // flexcards.js instance (abilities)
    const flexcards = new FlexCards('section#abilities #mobile.container');

    flexcards.carousel({ theme: "fff", indexType: "dots" });
    flexcards.components.container
        .querySelectorAll('.flexcards__arrow')
        .forEach(e => e.style.display = "none");

    // 
});
