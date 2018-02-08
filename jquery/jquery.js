$(document).ready(function (){
	
	/* This is a function used to hide all div's etc.  */
    function homeScreen(){
        $("#services").hide();
        $("#about").hide();
        $("#contact").hide();
    };
	
	$("#logo").click(function (){
		alert('Button Pressed')
	});
	
	/* This is the first function to be called, it is called automatically when the DOM is ready. */
    $(document).ready(function(){
        homeScreen()
    });
	
});
