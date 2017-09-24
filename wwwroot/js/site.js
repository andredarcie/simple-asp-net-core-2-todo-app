// Write your JavaScript code.
$(document).ready(function() {
    $('#add-item-button').on('click', addItem);

    $('.done-checkbox').on('click', function(e) {
        markCompleted(e.target);
    });
});

function addItem(){
    $('#add-item-error').hide();
    var newTitle = $('#add-item-title').val();

    $.post('/Todo/AddItem', { title: newTitle }, function() {
        window.location = '/Todo';
    });
}

function markCompleted(checkbox) {
    checkbox.disabled = true;
    
    $.post('/Todo/MarkDone', { id: checkbox.name }, function() {
        var row = checkbox.parentElement.parentElement;
        $(row).addClass('done');
    });
}
    