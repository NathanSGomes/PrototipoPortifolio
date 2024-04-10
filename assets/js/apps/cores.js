export function coresAleatorias() {
    var colors = ['#EEC759',
        '#7BD3EA',
        '#7ED7C1',
        '#5AA469',
        '#C84361',
        '#F675A8',
        '#756AB6',
        '#F6995C',
    ];

    var corAleatoriaIndex = Math.floor(Math.random() * colors.length);
    var corAleatoria = colors[corAleatoriaIndex];

    document.documentElement.style.setProperty('--corAleatoria', corAleatoria);
}