$(document).on('click', '[data-toggle="lightbox"]', function(event) {
    event.preventDefault();
    $(this).ekkoLightbox();
});

window.sr = ScrollReveal({ duration: 1000 });
sr.reveal('.services-item', 100);
sr.reveal('.circle-description', 100);
sr.reveal('.projects .item', 100);
