$('body')append(
$('<div>'))


$('div').text('Some text')

$('div').append(
    $('<input>')
)

$('input').val('a@a.pl')

$('input').attr('placeholder', 'E-Mail')