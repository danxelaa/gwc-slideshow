/*
    Daniela Olano
    July 14, 2015
*/

// All code in here only runs once the page loads
$(document).ready(function(){
   
   
   var currentImage = 0;
   var images = ["images/frog1.png", "images/frog2.png","images/frog3.png","images/frog4.png","images/frog5.png"];
   //alert("Hello frog!");
   $("body").append("<p>Hello world</p>");
   var randomNum = Math.random() * 10;
   $("body").append("<p>" + randomNum + "</p>")
   
   
    $("#next").click(function() {
     currentImage+=1;
        //alert("Next is clicked!");
        //$("#slideshowImage").attr("src","images/frog2.png");
    
    $("#slideshowImage").attr("src",images[currentImage]);
    
    });
    
    $("#prev").click(function() {
        currentImage-=1;
        $("#slideshowImage").attr("src",images[currentImage]);  
});
});