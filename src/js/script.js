/// ARRAY DE OBJETOS COM AS IMAGENS E INFORMAÇÕES DO BANNER
const bannerItems = [
{
    image: "./assets/img/slide1.png",
    titulo: "O Jogo da Imitação",
    descricao: "Um grupoamigos descobrem dados mágicos que não são o que parecem" 
},
{
    image: "./assets/img/slide2.png",
    titulo: "O Cassino - A Casa Sempre Ganha",
    descricao: "Um documentário mostrando os perigos e riscos dos cassinos" 
},
{
    image: "./assets/img/slide3.png",
    titulo: "Fliperamas",
    descricao: "A história de como os fliperamas mudaram o mundo" 
}
];

// DECLARANDO AS VARIÁVEIS E ELEMENTOS COM DOM (DOCUMENT OBJECT MODEL)
const tempo = 5000; // Tempo em milissegundos
const elementoBanner = document.querySelector(".banner");
const elementoTitulo = document.querySelector(".banner-titulo");
const elementoDescricao = document.querySelector(".banner-descricao");
let i = 0; // Início da contagem das imagens

// FUNÇÃO PARA O SLIDESHOW

function slideShow(){
    //  ALTERA A IMAGEM DE FUNDO DO BANNER
    // `` - Template strings ou strings literais forma de concatenar
    elementoBanner.style.backgroundImage = `url(${bannerItems[i].image})`;
    // ALTERA O TÍTULO DO BANNER
    elementoTitulo.textContent = bannerItems[i].titulo;
    // ALTERA A DESCRIÇÃO
    elementoDescricao.textContent = bannerItems[i].descricao;

    // INCREMENTA O ÍNDICE (i) E REINICIA QUANDO CHEGAR NO FINAL DO ARRAY
    
    // se o i for maior que a quantidade de imagens, volta pro início
    i++;
    if (i >= bannerItems.length){
        i = 0;
    };
    // CHAMA A FUNÇÃO NOVAMENTE APÓS O TEMPO DEFINIDO
    setTimeout(slideShow, tempo);
}

// INICIA O SLIDESHOW DA FUNÇÃO
slideShow();



// A função de login que já definimos na resposta anterior
const loginForm = async () => {
  // O restante do código do formulário de login do SweetAlert2
  // ...
  let usernameInput;
  let passwordInput;

  const { value: formValues } = await Swal.fire({
    title: 'Login Form',
    html: `
      <input type="text" id="username" class="swal2-input" placeholder="Apelido">
      <input type="password" id="password" class="swal2-input" placeholder="Senha">
    `,
    confirmButtonText: 'Logar',
    focusConfirm: false,
    didOpen: () => {
      const popup = Swal.getPopup();
      usernameInput = popup.querySelector('#username');
      passwordInput = popup.querySelector('#password');
      usernameInput.onkeyup = (event) => event.key === 'Enter' && Swal.clickConfirm();
      passwordInput.onkeyup = (event) => event.key === 'Enter' && Swal.clickConfirm();
    },
    preConfirm: () => {
      const username = usernameInput.value;
      const password = passwordInput.value;
      if (!username || !password) {
        Swal.showValidationMessage('Por favor, digite o nome de usuário e a senha');
        return false;
      }
      return { username, password };
    },
  });

  if (formValues) {
  Swal.fire({
    title: `Bem-vindo, ${formValues.username}!`,
    text: 'Login bem-sucedido.',
    icon: 'success',
    confirmButtonText: 'Continuar',
  }).then(() => {
    // redireciona para outra página após o clique em "Continuar"
    window.location.href = "tarefa.html"; 
  });
}
};

// Selecione o link de login
document.addEventListener('DOMContentLoaded', () => {
  const loginLink = document.getElementById('login-link');

  // Adicione o evento de clique
  if (loginLink) {
    loginLink.addEventListener('click', (event) => {
      // Previne que a página recarregue
      event.preventDefault(); 
      // Chama a função que exibe o formulário de login
      loginForm();
    });
  }
});
