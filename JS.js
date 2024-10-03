document.getElementById('saudacaoForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    var nome = document.getElementById('nome').value;

    if (nome.trim() === '') {
       
        document.getElementById('mensagem').textContent = 'Por favor, insira seu nome.';
    } else {
      
        var mensagem = 'Olá, ' + nome +  ' Seja bem-vindo(a) a página da Thaís!';

    
        document.getElementById('mensagem').textContent = mensagem;
    }
});