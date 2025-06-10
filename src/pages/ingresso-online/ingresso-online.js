const inputTipoIngresso = document.getElementById('tipo-ingresso');
const inputQtnIngresso = document.getElementById('qtd');

let ingressosDisponiveis = {
    pista: 100,
    superior: 200,
    inferior: 500
};
atualizaIngressos();

function atualizaIngressos() {
    let listaIngressosPista = document.getElementById('qtd-pista');
    let listaIngressosSuperior = document.getElementById('qtd-superior');
    let listaIngressosInferior = document.getElementById('qtd-inferior');

    listaIngressosPista.innerText = ingressosDisponiveis.pista;
    listaIngressosSuperior.innerText = ingressosDisponiveis.superior;
    listaIngressosInferior.innerText = ingressosDisponiveis.inferior;
}

function comprar() {
    const tipoIngresso = inputTipoIngresso.value;
    const qtdIngressos = Number(inputQtnIngresso.value);

    if (qtdIngressos <= 0 || isNaN(qtdIngressos)) {
        alert('Informe uma quantidade válida.');
        return;
    }

    if (qtdIngressos > ingressosDisponiveis[tipoIngresso]) {
        alert('Quantidade solicitada indisponível.');
        return;
    }

    ingressosDisponiveis[tipoIngresso] -= qtdIngressos;
    atualizaIngressos();
    alert(`Compra realizada com sucesso!`);
    inputQtnIngresso.value = ''
}