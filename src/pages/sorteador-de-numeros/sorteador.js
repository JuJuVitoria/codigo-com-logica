let resultado = document.getElementById('resultado');
let quantidadeInput = document.getElementById('quantidade');
let minInput = document.getElementById('de');
let maxInput = document.getElementById('ate');

function sortear() {
    let quantidade = parseInt(quantidadeInput.value);
    let min = parseInt(minInput.value);
    let max = parseInt(maxInput.value);

    if (isNaN(quantidade) || isNaN(min) || isNaN(max)) {
        resultado.innerText = 'Preencha todos os campos corretamente.';
        return;
    }

    if (min > max) {
        resultado.innerText = 'O valor mínimo não pode ser maior que o máximo.';
        return;
    }

    if (quantidade > (max - min + 1)) {
        resultado.innerText = 'Quantidade maior que o intervalo disponível.';
        return;
    }

    let sorteados = obterNumeroAleatorio(quantidade, min, max);

    resultado.innerText = `Números sorteados: ${sorteados.join(', ')}`;

    alterarStatusBotao("habilitado")
}

function obterNumeroAleatorio(qnt, min, max) {
    let listaSorteados = [];

    while (listaSorteados.length < qnt) {
        let sorteado = geraNumeroAleatorio(min, max);
        if (!listaSorteados.includes(sorteado)) {
            listaSorteados.push(sorteado);
        }
    }

    return listaSorteados;
}

function geraNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function alterarStatusBotao(status) {
    let btnReiniciar = document.getElementById('btn-reiniciar');
    if (status == "habilitado")
        btnReiniciar.classList = 'container__botao';
    else if (status == "desabilitado") {
        btnReiniciar.classList = 'container__botao-desabilitado';
    } else {
        console.log("Parâmetro desconhecido")
    }
}

function reiniciar() {
    resultado.innerText = 'Números sorteados: nenhum até agora';
    quantidadeInput.value = '';
    minInput.value = '';
    maxInput.value = '';

    alterarStatusBotao("desabilitado")
}