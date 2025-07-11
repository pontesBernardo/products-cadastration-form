function getElementID(id) {
  return document.getElementById(id);
} //function para getar o id do elemento de forma mais pratica

const inputs = {
  searchID: getElementID("inputID"),
  searchName: getElementID("inputName"),
  nameProduct: getElementID("newProductName"),
  priceProduct: getElementID("newProductPrice"),
};

const buttons = {
  filterButton: getElementID("filterResults"),
  newProductButton: getElementID("newProduct"),

  //modal
  closeModal: getElementID("closeModal"),
  createProduct: getElementID("createNew"),
};

const modal = getElementID("modal");

const listaProdutos = getElementID("listaProdutos");

const produtos = [];

function limparFormulario() {
  inputs.nameProduct.value = "";
  inputs.priceProduct.value = "";
}

function novoProduto() {
  let id = Math.random().toString(36).slice(2, 10);
  let nome = inputs.nameProduct.value;
  let preco = inputs.priceProduct.value

  if (inputs.nameProduct.value === "" || inputs.priceProduct.value === "") {
    alert("Preencha os campos necessários para criar um novo produto.");
  } else {
    limparFormulario();

    let produto = { id, nome, preco };
    produtos.push(produto);
    criarProduto(produto);
    fecharModal()
  }
}

function criarProduto(produto) {
  listaProdutos.innerHTML += `
    <div class="flex justify-between pb-5 border-b border-b-black/50">
        <h1>${produto.id}</h1>
        <h1>${produto.nome}</h1>
        <h1>R$ ${produto.preco}</h1>
    </div>
  `;
}

//abrir/fechar modal de novo produto
buttons.newProductButton.addEventListener("click", () => {
  abrirModal()
});

buttons.closeModal.addEventListener("click", () => {
  fecharModal()
});

function abrirModal() {
  modal.classList.remove("hidden");
  modal.classList.add("flex");
}

function fecharModal() {
  modal.classList.remove("flex");
  modal.classList.add("hidden");
}

//criar produto
buttons.createProduct.addEventListener("click", () => {
  novoProduto();
});

