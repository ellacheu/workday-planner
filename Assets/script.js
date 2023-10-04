// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
var currentDay = $('#currentDay');
var saveButton = $('.saveBtn');

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

// Saves entries into local storage for each time slot container
$(function() {
  var saveButton9 = $('#saveBtn9');
  saveButton9.on("click", function() {
    var timeslot9 = $(hour9)
    var inputValue = timeslot9.find("textarea").val();
    localStorage.setItem("inputValue", inputValue);

  var saveButton10 = $('#saveBtn10');
  saveButton10.on("click", function() {
    var timeslot10 = $(hour10);
    var inputValue10 = timeslot10.find("textarea").val();
    localStorage.setItem("inputValue10", inputValue10);

  var saveButton11 = $('#saveBtn11');
  saveButton11.on("click", function() {
    var timeslot11 = $(hour11);
    var inputValue11 = timeslot11.find("textarea").val();
    localStorage.setItem("inputValue11", inputValue11);
  })

    })
  
  });

//  var timeslotContainers = ['hour9', 'hour10', 'hour11', 'hour12', 'hour13', 'hour14', 'hour15', 'hour16', 'hour17'];
//  var localStorageData = getLocalStorageData(timeslotContainers);
//  console.log(localStorageData);

// $(function getLocalStorageData(timeslotContainers) {
//   var data = {};

//   timeslotContainers.foreach(timeslotContainers => {
//     var containerData = localStorate.getItem(timeslotContainers);
//     data[timeslotContainers] = JSON.parse(containerData);
//   })
// });

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

