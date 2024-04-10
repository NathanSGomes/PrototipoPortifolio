import { scrollNavbar } from './apps/navbar.js';
import { coresAleatorias } from './apps/cores.js';
import { anoAtual } from './apps/copyright.js';
import { toggleDarkMode } from './apps/darkMode.js';

//navbar.js
scrollNavbar();

window.addEventListener('DOMContentLoaded', function () {
    coresAleatorias(); //cores.js
    anoAtual(); //copyright.js
    toggleDarkMode(); //darkMode.js
});