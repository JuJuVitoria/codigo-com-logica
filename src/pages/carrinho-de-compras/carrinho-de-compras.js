let inputProduto = document.getElementById('produto');
let qtn = document.getElementById('quantidade');
let listaProdutos = document.getElementById('lista-produtos');
let respValorTotal = document.getElementById('valor-total');
let valorTotal = 0;

limpar();

function adicionar() {
    if (!inputProduto.value || !qtn.value) {
        alert("Preencha todos os campos!");
        return;
    }

    let produto = inputProduto.value.split('-')[0];
    let quantidade = Number(qtn.value);
    let valor = Number(inputProduto.value.split('-')[1].replace(["R$"], ""));

    let listContainerProduto = document.createElement('section');
    listContainerProduto.classList.add('carrinho__produtos__produto', 'texto__paragrafo');
    
    let spanProduto = `
    <span class="texto-azul texto__paragrafo">${quantidade}x</span> ${produto}<span class="texto-azul texto__paragrafo">R$${valor}</span>
    `
    listContainerProduto.insertAdjacentHTML('beforeend', spanProduto);

    listaProdutos.append(listContainerProduto);

    valorTotal += (valor * quantidade);
    respValorTotal.innerText = `R$ ${valorTotal.toFixed(2)}`;

    qtn.value = "";
}

function limpar() {
    listaProdutos.innerText = '';
    valorTotal = 0;
    respValorTotal.innerText = 'R$ 0';
}