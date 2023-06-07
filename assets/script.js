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
  var key = $(this).parent().attr("id").split("-")[1];
  var value = $(this).parent().find(".description").val();
  //local storage
  localStorage.setItem(key,value);
});

$(".time-block").each(function(){
  //hour value for each time block
  var blockHour = $(this).attr("id").split("-")[1];

  //pulls saved value from local storage and puts it in its corrisponding time block
  var textEntry = localStorage.getItem(blockHour);
  var textArea = $(this).find(".description");
  textArea.val (textEntry);

  if (blockHour < currentHour){
      $(this).find(".description").addClass("past");
  }else if(blockHour == currentHour){
      $(this).find(".description").addClass("present");
  }else{
      $(this).find(".description").addClass("future");
   }
});

