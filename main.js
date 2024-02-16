$(document).ready(function(){
    
    $('header button').click(function(){
        $('form').slideDown()
    })

    $('#botao-cancelar').click(function(){
        $('form').slideUp()
    })

    $('form').on('submit', function(e){
        e.preventDefault()
        const novaLista = $('#nova-lista').val()
        
        
        $('ul').append('<li>' +novaLista+'</li>')

        // $('ul').append('<li>+novaLista+ </li>')
        
        // console.log(novaLista)
        //  const novoItem = $('<li></li>')
        // $(`${novaLista}`).appendTo(novoItem)

    })
})