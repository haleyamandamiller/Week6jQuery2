/*
=======================================================
** Week 4 - Project 2**
*** jQuery Mania ***
=======================================================
*/

// Add your JS here.


$(document).ready(function() {


//1.
 $(".alertme").click(function(){
   alert("jQuery seems easy so far!");
 });

//2.
  $(".clickme").click(function(){
    $(".clickme").text("I Was Clicked");
  });

//3.
 $(".addStyle").click(function(){
   $("button").addClass("buttonStyle");
 });

//4.
 $(".addDifferentStyle").click(function(){
   $(".addDifferentStyle").addClass("addUniqueStyle");
 });

//5.
$(".removeBtn").click(function(){
  $("button").removeClass();
});

//6.
$(".clickToggle").click(function(){
  $(".clickToggle").toggle("addClass", function(){
    });
});

//7.
$(".squareBtn").click(function(){
  $(".square").hide(1000);
});


//8.
$(".circle").click(function(){
  $(".circle").hide(1000);
});


//9.
$(".toggleRedSquare").click(function(){
  $(".redSquare").toggle(function(){
    $(".redSquare").animate({height: '200',(1500)});
    $(".redSquare").animate({height:'100', (1500)})
  });
});


});  // Close: $(document).ready(function() {




	
