

// Path: js\botao.js
window.onscroll = function () {
    mostrarBotao();
};

function mostrarBotao() {
    if (
        document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 20
    ) {
        document.getElementById("voltar-ao-topo").style.display = "block";
    } else {
        document.getElementById("voltar-ao-topo").style.display = "none";
    }
}

function voltarAoTopo() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}