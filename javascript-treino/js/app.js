// Espera até que todo o DOM seja carregado antes de executar o código interno
document.addEventListener("DOMContentLoaded", function() {
    // Obtém o elemento de parágrafo com o ID "meuParagrafo" do DOM
    const para = document.getElementById("meuParagrafo");

    // Adiciona um ouvinte de evento de clique ao parágrafo
    para.addEventListener("click", function() {
        // Pede ao usuário para inserir um novo nome através de um prompt
        var nome = prompt("Insira um novo nome");
        // Atualiza o conteúdo do parágrafo com o novo nome inserido
        para.textContent = "Jogador 1: " + nome;
    });

    // Define uma função para criar um novo parágrafo e adicioná-lo ao corpo do documento
    function criarParagrafo() {
        // Cria um novo elemento de parágrafo
        let para = document.createElement("p");
        // Define o texto do novo parágrafo
        para.textContent = "Você clicou no botão!";
        // Adiciona o novo parágrafo ao corpo do documento
        document.body.appendChild(para);
    }

    // Obtém todos os elementos de botão do documento
    const botoes = document.querySelectorAll("button");

    // Itera sobre todos os botões e adiciona um ouvinte de evento de clique a cada um
    for (let i = 0; i < botoes.length; i++) {
        botoes[i].addEventListener("click", criarParagrafo);
    }
});
