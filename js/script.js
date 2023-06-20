//Ativa menu
const link = document.querySelectorAll('.header-menu a');

function ativarLink (link) {
  const url = location.href;
  const href = link.href;
  if (url.includes(href)) {
    link.classList.add('ativo');
  }
}

link.forEach(ativarLink);

// Ativa itens do orçamento

const parametros = new URLSearchParams(location.search);

function ativarProdutos (parametro) {
  const elemento = document.getElementById(parametro);
  if (elemento) {
    elemento.checked = true;
  }
}

parametros.forEach(ativarProdutos);