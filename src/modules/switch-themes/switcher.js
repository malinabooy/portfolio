document.addEventListener('DOMContentLoaded', () => {
    const toggle = document.getElementById('theme-toggle');

    toggle.addEventListener('change', () => {
        document.body.classList.toggle('light-theme', toggle.checked);
    })
});

