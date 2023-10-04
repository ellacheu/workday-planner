// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
var currentDay = $('#currentDay');
var saveButtonEl = $('.saveBtn');

// time slot container variables
var hour9 = $('#hour-9');
var hour10 = $('#hour-10');
var hour11 = $('#hour-11');
var hour12 = $('#hour-12');
var hour1 = $('#hour-13');
var hour2 = $('#hour-14');
var hour3 = $('#hour-15');
var hour4 = $('#hour-16');
var hour5 = $('#hour-17');

  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?  

  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?

$(function() {
  var descriptionEl = $('.description');
  var saveButton = $('.saveBtn');

  saveButton.on("click", function(event) {
    event.preventDefault();
    var savedEvent = createInput.value;
    var inputValue = $('savedEvent').val();

    localStorage.setItem("inputValue", savedEvent);
  })


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
});


// display the current time at the top of the calender
// time blocks for standard 9-5 hours
// color-coded indicating past, present or future
// enter an event on time block
// clicking save saves the event to local storage
// upon refresh, the saved event persists.  

