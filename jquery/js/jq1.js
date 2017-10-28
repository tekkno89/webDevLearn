
console.log('js loaded');

$('#input1').keypress(
    function(event) {
        console.log(event);
    }
);

$('#changeTitle').click(
    function() {
        $('#title').text('You Clicked the Button!');
    }
);

$('#fadeButton').on('click', function() {
    $('li').fadeToggle(1000);
});

$("#slideButton").on('click', function() {
    $('li').slideToggle();
});
