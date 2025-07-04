function getElementID(id) {
  return document.getElementById(id);
} //function para getar o id do elemento de forma mais pratica

const inputs = {
  nomeProduto: getElementID("inputProductName"),
  precoProduto: getElementID("inputProductPrice"),
  tipoProduto: getElementID("selectTypeOfProduct"),
}; //objeto para getar todos os inputs

const listaProdutos = getElementID("produtosContainer");
const formProdutos = getElementID("formProdutos");

const produtos = []; //array vazia que vai conter o objeto com os valores dos inputs

function limparFormulario() {
  inputs.nomeProduto.value = "";
  inputs.precoProduto.value = "";
  inputs.tipoProduto.value = "";
} //function para limpar o formulario assim que cadastrar o produto

function cadastrarProduto() {
  let nome = inputs.nomeProduto.value;
  let preco = Number(inputs.precoProduto.value);
  let tipo = inputs.tipoProduto.value;

  let produto = { nome, preco, tipo };
  produtos.push(produto);

  criarListaProdutos(produto);
  limparFormulario();
} //function para "salvar" o produto dentro da array produtos, criar a lista de produtos e limpar o form

function criarListaProdutos(produto) {
  listaProdutos.innerHTML += `
        <div class="bg-white p-4 rounded-xl shadow-md flex flex-col justify-between">
            <h3 class="font-semibold text-lg mb-2">${produto.nome}</h3>
            <p class="text-gray-600 mb-1">Preço: ${produto.preco}</p>
            <p class="text-gray-600">Categoria: ${produto.tipo}</p>
        </div>
    `;
} //function para criar o card com as informações do produto

formProdutos.addEventListener("submit", function (event) {
  event.preventDefault();
  cadastrarProduto();
}); //aqui quando enviar o formulário vai previnir que a pagina recarregue e vai chamar a function de cadastrar o produto
