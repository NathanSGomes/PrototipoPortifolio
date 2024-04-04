export function coresAleatorias() {
    var colors = ['#FDF500', '#ee0e85', '#15dfed', '#ff013c', '#08ff00'];

    var corAleatoriaIndex = Math.floor(Math.random() * colors.length);
    var corAleatoria = colors[corAleatoriaIndex];

    document.documentElement.style.setProperty('--corAleatoria', corAleatoria);
}