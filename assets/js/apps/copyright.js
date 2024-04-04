export function anoAtual() {
    var elementoAno = document.getElementById("anoAtual");
    var anoAtual = new Date().getFullYear();
    elementoAno.innerHTML = anoAtual + ' <i class="uil uil-copyright"></i> <a href="https://github.com/NathanSGomes" target="_blank">Nathan Aranha</a> | Todos os direitos reservados.';
}
