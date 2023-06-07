// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
//current date
var currentDay = $("#currentDay");
currentDay.text (moment().format('dddd, MMM Do YYYY'));
    
//current hour
var currentHour = moment().hour();

//save button
$(".saveBtn").on("click", function(){
  //Key
  var key = $(this).parent().attr("id").split("-")[1];
  //Value
  var value = $(this).parent().find(".description").val();
  //Save Key and Value to Local Storage
  localStorage.setItem(key,value);
});

