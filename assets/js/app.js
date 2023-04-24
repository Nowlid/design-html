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
});
