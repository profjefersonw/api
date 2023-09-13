// Executa o código após a página ser totalmente carregada
window.onload = function() {
    // URL da API JSONPlaceholder que fornece uma lista de postagens
    const urlAPI = "https://jsonplaceholder.typicode.com/posts";

    // Realiza uma solicitação para a API usando fetch
    fetch(urlAPI)
        .then(resposta => {
            // Converte a resposta da API em um objeto JSON
            return resposta.json();
        })
        .then(dados => {
            // Pega a lista (ul) onde as postagens serão inseridas
            const listaPostagens = document.getElementById('lista-postagens');

            // Itera sobre cada postagem retornada pela API
            dados.forEach(postagem => {
                // Cria um item de lista (li) para cada postagem
                let item = document.createElement('li');
                item.textContent = postagem.title; // Define o conteúdo do item como o título da postagem
                listaPostagens.appendChild(item); // Adiciona o item à lista
            });
        })
        .catch(erro => {
            // Caso algo dê errado, mostra o erro no console
            console.error("Houve um erro ao buscar as postagens!", erro);
        });
};