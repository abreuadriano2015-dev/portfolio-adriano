const projetos = [
  {
    nome: "Manutenção de Impressora",
    descricao: "Serviço de manutenção e limpeza em impressoras"
  },
  {
    nome: "Rede de Computadores",
    descricao: "Configuração de IP, organização de cabos e switches"
  },
  {
    nome: "Portfólio Web",
    descricao: "Meu primeiro site usando HTML, CSS e JavaScript"
  }
];

const lista = document.getElementById("lista-projetos");

projetos.forEach(projeto => {
  const card = document.createElement("div");
  card.classList.add("card");

  card.innerHTML = `
    <h3>${projeto.nome}</h3>
    <p>${projeto.descricao}</p>
  `;

  lista.appendChild(card);
});