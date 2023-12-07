$(document).ready(function () {
    let clickCount = 0;

    $("#toggleButton").click(function ()
    
    {
        clickCount++;
        
        if (clickCount % 2 !== 0)
        {
            $(".first-paragraph").hide();
            $(this).text("Click again!");
        }
        
        else
        {
            $(".first-paragraph").show();
            $(this).text("Click me!");
        }
    });
    
});
