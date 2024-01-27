// selecionar botão
const botao = document.querySelector('.conselho-enviar');
const numeroConselho = document.querySelector('.conselho-id');
const descricaoConselho = document.querySelector('.conselho-descricao');

async function mostarConselho() {
    const resposta = await fetch('https://api.adviceslip.com/advice');
    const conteudoConselho = await resposta.json();
    const idConselho = `Advice N°${conteudoConselho.slip.id}`;
    const textoConselho = `"${conteudoConselho.slip.advice}"`

    numeroConselho.innerHTML = idConselho;
    descricaoConselho.innerHTML = textoConselho;
}

botao.addEventListener('click', mostarConselho);

mostarConselho()