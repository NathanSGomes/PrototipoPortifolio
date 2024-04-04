import { scrollNavbar } from './apps/navbar.js';
import { coresAleatorias } from './apps/cores.js';
import { anoAtual } from './apps/copyright.js';

//navbar.js
scrollNavbar();

//cores.js
window.addEventListener('DOMContentLoaded', function () {
    coresAleatorias();
});

//copyright.js
window.addEventListener('DOMContentLoaded', function () {
    anoAtual();
});