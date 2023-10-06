// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
var currentDay = $('#currentDay');

// time slot container variables
var hour9 = $('#hour-9');
var hour10 = $('#hour-10');
var hour11 = $('#hour-11');
var hour12 = $('#hour-12');
var hour13 = $('#hour-13');
var hour14 = $('#hour-14');
var hour15 = $('#hour-15');
var hour16 = $('#hour-16');
var hour17 = $('#hour-17');

// Saves entries into local storage for each time slot container
$(function() {
  // function to compare time slot hour to current hour
// then adds past, present, future class element 
  var currentHour = dayjs().hour();
  $('.time-slot').each(function(){
    var slotHour = parseInt($(this).attr('id').split('-')[1]);
  
    if (slotHour < currentHour) {
      $(this).addClass('past');
    } else if (slotHour === currentHour) {
      $(this).addClass('present');
    } else {
      $(this).addClass('future');
    }
    
    });
  
  
  // function to display current date and time
    function displayTime() {
    var today = dayjs().format('MMM DD, YYYY [at] hh:mm:ss a');
    currentDay.text(today);
  };
  
  
  
  displayTime();
  setInterval(displayTime, 1000);
  })
  
  $(function() {
    var savedInputValue = JSON.parse(localStorage.getItem('inputValue'));
    if (savedInputValue !== null) {
      textarea.val(savedInputValue);
    } 
    var saveButton9 = $('#saveBtn9');
    saveButton9.on("click", function() {
    var timeslot9 = $(hour9);
    var inputValue = timeslot9.find("textarea").val();
    localStorage.setItem("inputValue", JSON.stringify(inputValue));

  });
});

  var saveButton10 = $('#saveBtn10');
  saveButton10.on("click", function() {
    var timeslot10 = $(hour10);
    var inputValue10 = timeslot10.find("textarea").val();
    localStorage.setItem("inputValue10", inputValue10);
  })
  var saveButton11 = $('#saveBtn11');
  saveButton11.on("click", function() {
    var timeslot11 = $(hour11);
    var inputValue11 = timeslot11.find("textarea").val();
    localStorage.setItem("inputValue11", inputValue11);
  })
  var saveButton12 = $('#saveBtn12');
  saveButton11.on("click", function() {
    var timeslot12 = $(hour12);
    var inputValue11 = timeslot12.find("textarea").val();
    localStorage.setItem("inputValue12", inputValue12);
  })
  var saveButton13 = $('#saveBtn13');
  saveButton13.on("click", function() {
    var timeslot13 = $(hour13);
    var inputValue13 = timeslot13.find("textarea").val();
    localStorage.setItem("inputValue13", inputValue13);
  })
  var saveButton14 = $('#saveBtn14');
  saveButton14.on("click", function() {
    var timeslot14 = $(hour14);
    var inputValue14 = timeslot14.find("textarea").val();
    localStorage.setItem("inputValue14", inputValue14);
  })
  var saveButton15 = $('#saveBtn15');
  saveButton15.on("click", function() {
    var timeslot15 = $(hour15);
    var inputValue15 = timeslot15.find("textarea").val();
    localStorage.setItem("inputValue15", inputValue15);
  })
  var saveButton16 = $('#saveBtn16');
  saveButton16.on("click", function() {
    var timeslot16 = $(hour16);
    var inputValue16 = timeslot16.find("textarea").val();
    localStorage.setItem("inputValue16", inputValue16);
  })
  var saveButton17 = $('#saveBtn17');
  saveButton17.on("click", function() {
    var timeslot17 = $(hour17);
    var inputValue17 = timeslot17.find("textarea").val();
    localStorage.setItem("inputValue17", inputValue17);
  })






// display the current time at the top of the calender
// time blocks for standard 9-5 hours
// color-coded indicating past, present or future
// enter an event on time block
// clicking save saves the event to local storage
// upon refresh, the saved event persists.  

