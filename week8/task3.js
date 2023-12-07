$(document).ready(function ()
{
    $('#addTask').click(function ()
    {
        var taskText = $('#newTask').val();

        if (taskText !== '')
        {
            $('#taskList').append('<li>' + taskText + '</li>');
            $('#newTask').val('');
        }
    });
    

    $(document).on('click', 'li', function ()
    {
        $(this).toggleClass('crossed-out');
    });
});