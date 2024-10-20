document.addEventListener("DOMContentLoaded", function() {
    const channels = document.querySelectorAll('.channel');

    channels.forEach(channel => {
        channel.addEventListener('mouseenter', () => {
            const color = channel.getAttribute('data-color');
            document.body.style.backgroundColor = 'transparent';
        });

        channel.addEventListener('mouseleave', () => {
            document.body.style.backgroundColor = '#f0f8ff';
        });
    });
});
