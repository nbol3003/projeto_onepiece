// OBJETIVO 1.0 - quando clicar no botão do personagem na lista, marcar o botão como selecionado 
  //passo 1 - pegar os botões no JS pra poder verificar quando o usuário clicar em cima de um deles
      const botoes = document.querySelectorAll(".botao");

      //OBJETIVO 2.0 - quando clicar no botão do personagem mostrar as informações do personagem
        //passo 2.1 - pegar os personagens do js para poder mostrar ou esconder ele
         const personagens = document.querySelectorAll (".personagem")
          
    
      botoes.forEach((botao, indice)=> {
        botao.addEventListener("click",() =>{

            // passo 1.3 - verificar se já existe um botão selecionado, se sim, devemos remover a seleção dele
              desselecionarBotao(); //(obs: linha 35 a 37)//
              

            //passo 1.2 -  adciona a classe "selecionado" no botão que o usuário clicou
            botao.classList.add("selecionado");

            //passo 2.3 - verificar se já existe um personagem selecionado, se sim, devemos remover a seleção dele  
            desselecionarPersonagem(); //(obs: linha 30 a 33)//

            //passo 2.2 - adicionar a classe "selecionado" no personagem que o usuário selecionou
            personagens[indice].classList.add("selecionado");

                 })
        });
  
 
function desselecionarPersonagem() {
  const personagemSelecionado = document.querySelector(".personagem.selecionado");
  personagemSelecionado.classList.remove("selecionado");
}

function desselecionarBotao() {
  const botaoSelecionado = document.querySelector(".botao.selecionado");
  botaoSelecionado.classList.remove("selecionado");
}

