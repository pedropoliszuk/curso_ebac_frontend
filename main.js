$('form').on('submit', function(e){
    e.preventDefault();
})

$(document).ready(function() {

    $('#botao').click(function() {

        const adicionarTarefa = $('#tarefa-input').val();
        $('#lista-tarefas').append('<li>' + adicionarTarefa + '</li>');
        $('#tarefa-input').val('');
    });

    $('#lista-tarefas').on('click', 'li', function(){
        $(this).addClass('concluido');
    });
});
