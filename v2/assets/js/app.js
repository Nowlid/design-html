window.addEventListener('load', () => {
    // Loading animation
    setTimeout(() => document.body.classList.add('loaded'), 500);

    // Check failed images
    document.querySelectorAll('img').forEach(e => {
        if (!(e.complete && e.naturalWidth + e.naturalHeight)) {
            e.classList.add('failed');
            let span = document.createElement('span');
            span.innerHTML = e.alt;
            e.parentElement.appendChild(span);
        }
    });

    // Header menu
    document.querySelectorAll('header > nav li button').forEach(el => (
        el.parentElement.addEventListener('click', e => {
            e.preventDefault();
            e.stopPropagation();
            e.currentTarget.parentElement.classList.toggle('active');
            e.currentTarget.blur();
        })
    ));
});
