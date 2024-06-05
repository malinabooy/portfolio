// Импорт библиотек

// ---

// Импорт исполняемых скриптов
import './common/transition.js'
// import './common/modal'
// ---

// Импорт модулей
import './import/modules.js'
// ---


document.addEventListener('DOMContentLoaded', () => {
    const toggle = document.getElementById('theme-toggle');
    if (toggle) {
        toggle.addEventListener('change', () => {
            document.body.classList.toggle('light-theme', toggle.checked);
            console.log('Theme toggled');
        });
    } else {
        console.error('Toggle switch not found');
    }
});

console.log('Script loaded');

