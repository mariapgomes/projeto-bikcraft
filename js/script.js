//*ATIVA O MENU DO HEADER
const link = document.querySelectorAll('.header-menu a');

function ativarLink (link) {
  const url = location.href;
  const href = link.href;
  if (url.includes(href)) {
    link.classList.add('ativo');
  }
}

link.forEach(ativarLink);

//*ATIVA ITENS DO ORÇAMENTO

const parametros = new URLSearchParams(location.search);

function ativarProdutos (parametro) {
  const elemento = document.getElementById(parametro);
  if (elemento) {
    elemento.checked = true;
  }
}

parametros.forEach(ativarProdutos);

//*PERGUNTAS FREQUENTES

const perguntas = document.querySelectorAll('.perguntas-conteudo button');

function ativarPergunta (event) {
  const pergunta = event.currentTarget;
  const controle = pergunta.getAttribute('aria-controls');
  const resposta = document.getElementById(controle);

  resposta.classList.toggle('ativa');
  const ativa = resposta.classList.contains('ativa');
  pergunta.setAttribute('aria-expanded', ativa)
  
}

function cliquePerguntas (pergunta) {
  pergunta.addEventListener('click', ativarPergunta)
}

perguntas.forEach(cliquePerguntas);