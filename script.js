$(document).ready(function () {
    
    function updateOutput() {
        $("iframe").contents().find("html").html(
         "<html><head><style type='text/css'>" + $("#css-pane").val() + "</style></head><body>" + $("#html-pane").val() + "</body><html>");
    }
    
    //hide panels when corresponding button is clicked
    
    $('.toggle').click(function () {
        $(this).toggleClass('active');
        
        var paneId = $(this).attr("id") + "-pane";
        $("#" + paneId).toggle();
        var sectionId = $(this).attr("id") + "-section";
        $("#" + sectionId).toggle();
    });
    
    //update output pane as html/css are typed
    
    updateOutput();
    
    $("textarea").on('change keyup paste', function () {
        updateOutput();
        
    });
   
    
    
});