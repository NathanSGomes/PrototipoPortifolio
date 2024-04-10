export function toggleDarkMode() {
    const darkModeCheckbox = document.getElementById('darkMode');

    function verificaDarkMode() {
        if (darkModeCheckbox.checked) {
            ativarDarkMode();
            localStorage.setItem('darkModeEnabled', true);
        } else {
            desativarDarkMode();
            localStorage.setItem('darkModeEnabled', false);
        }
    }

    function ativarDarkMode() {
        document.body.classList.add('dark-mode');
    }

    function desativarDarkMode() {
        document.body.classList.remove('dark-mode');
    }

    darkModeCheckbox.addEventListener('change', verificaDarkMode);

    // Verifica se o modo escuro está ativado no carregamento da página
    const isDarkModeEnabled = localStorage.getItem('darkModeEnabled');
    if (isDarkModeEnabled === 'true') {
        darkModeCheckbox.checked = true;
        ativarDarkMode();
    } else {
        darkModeCheckbox.checked = false;
        desativarDarkMode();
    }
}


/*export function autoDarkMode() {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        ativarDarkMode(); // Ativa o modo escuro automaticamente
    }
}*/