$(document).ready(function() {
    
    $('header button').click(function() {
        $('form').slideDown()
    })

    $('#botao-cancelar').click(function () {
        $('form').slideUp()
    })
//quando o formulario for submetido o endereço da imagem será capturado e será inserido ao final da lista -- o appendTo insere enderecoNovaImagem dentro da atribuição d
    $('form').on('submit', function(e) {
        e.preventDefault()
        const enderecoDaNovaImagem = $('#endereco-imagem-nova').val();
        const novoItem = $('<li style="display: none"></li>');
        $(`<img src="${enderecoDaNovaImagem}" />`).appendTo(novoItem)
        $(`
            <div class="overlay-image-link">
                <a href="${enderecoDaNovaImagem} target="_blank" title="Ver imagem em tamanho Real>
                    Ver imagem em tamanho Real
                </a>    
            </div>
            `).appendTo(novoItem)
            $(novoItem).appendTo('ul')
            $(novoItem).fadeIn(600)
            $('#endereco-imagem-nova').val('')
    })
})

