
console.log('js loaded');

$('ul').on('click', 'li', function() {
    $(this).toggleClass('todoDone');
    console.log('clicked li');
});

$('ul').on('click', '.deleteTodo', function(event) {
    $(this).parent().slideUp(500, function() {
        $(this).remove();
    });
    event.stopPropagation();
});

$('#inputTodo').on('keypress', function(event) {
    if (event.which === 13) {
        var todoText = $(this).val();
        $(this).val('');
        $('#listTodo').append('<li><span class="deleteTodo"><i class="fa fa-trash"></i> </span>' + todoText + '</li>');
    }
});

$('.fa-plus').on('click', function() {
    $('#inputTodo').fadeToggle();
});
