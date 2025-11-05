//ARRAY DE OBJETOS COM AS IMAGENS E INFORMAÇÕES DO BANNER
const bannerItems =[
{
    imagem:"./assets/slide1.jpg",
    titulo: "TItulo do filme",
    descricao: "Filme 1"
},
{
    imagem:"./assets/slide2.jpg",
    titulo: "TItulo do filme 2",
    descricao: "Filme 2"
},

{
    imagem:"./assets/slide3.jpg",
    titulo: "TItulo do filme 3",
    descricao: "Filme 3"
}

];

//DECLARANDO AS VARIAVEIS E ELEMENTOS COM DOM(DOCUMENT OBJECT MODEL)
let i= 0;// inicio da contagem das imagens
const tempo = 5000; // tempo em milissegundos
const elementoBanner = document.querySelector(".banner");
const elementoTitulo = document.querySelector(".banner-titulo");
const elementoDescricao = document.querySelector(".banner-descricao");


// FUNÇÃO PARA O SLIDESHOW

function slideShow(){
    // ALTERA A IMAEM DE FUNDO DO BANNER
    // ``- template strings ou string literais forma de concatenar
    elementoBanner.style.backgroundImage = `url(${bannerItems[i].imagem})`;
    // ALTERA O TITULO DO BANNER
    elementoTitulo.textContent =bannerItems[i].titulo;
     // ALTERA O DESCRIÇÃO DO BANNER
    elementoDescricao.textContent = bannerItems[i].descricao;

    // INCREMENTA O INDECE (i) e reinicia quando chegar no final do array

    // se o i for maior que a quantidade de imagems volta para o inicio
    i++;
    if( i >= bannerItems.length){
        i =0;
    }
    // chama a função noamente após o tempo definido
    setTimeout(slideShow, tempo);

}
// inicia o slideShow da função
slideShow()



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
