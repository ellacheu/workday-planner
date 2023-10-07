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

  var saveButton9 = $('#saveBtn9');
  saveButton9.on("click", function() {
    var timeslot9 = $(hour9);
    var input9 = timeslot9.find("textarea").val();
    localStorage.setItem("input9", JSON.stringify(input9));
  })
  var saveButton10 = $('#saveBtn10');
  saveButton10.on("click", function() {
    var timeslot10 = $(hour10);
    var input10 = timeslot10.find("textarea").val();
    localStorage.setItem("input10", JSON.stringify(input10));
  })
  var saveButton11 = $('#saveBtn11');
  saveButton11.on("click", function() {
    var timeslot11 = $(hour11);
    var input11 = timeslot11.find("textarea").val();
    localStorage.setItem("input11", JSON.stringify(input11));
  })
  var saveButton12 = $('#saveBtn12');
  saveButton11.on("click", function() {
    var timeslot12 = $(hour12);
    var input12 = timeslot12.find("textarea").val();
    localStorage.setItem("input12", JSON.stringify(input12));
  })
  var saveButton13 = $('#saveBtn13');
  saveButton13.on("click", function() {
    var timeslot13 = $(hour13);
    var input13 = timeslot13.find("textarea").val();
    localStorage.setItem("input13", JSON.stringify(input13));
  })
  var saveButton14 = $('#saveBtn14');
  saveButton14.on("click", function() {
    var timeslot14 = $(hour14);
    var input14 = timeslot14.find("textarea").val();
    localStorage.setItem("input14", JSON.stringify(input14));
  })
  var saveButton15 = $('#saveBtn15');
  saveButton15.on("click", function() {
    var timeslot15 = $(hour15);
    var input15 = timeslot15.find("textarea").val();
    localStorage.setItem("input15", JSON.stringify(input15));
  })
  var saveButton16 = $('#saveBtn16');
  saveButton16.on("click", function() {
    var timeslot16 = $(hour16);
    var input16 = timeslot16.find("textarea").val();
    localStorage.setItem("input16", JSON.stringify(input16));
  })
  var saveButton17 = $('#saveBtn17');
  saveButton17.on("click", function() {
    var timeslot17 = $(hour17);
    var input17 = timeslot17.find("textarea").val();
    localStorage.setItem("input17", JSON.stringify(input17));
  })


var itemKeys = ['input9', 'input10', 'input11', 'input12','input13','input14', 'input15', 'input16','input17'];

// Object to store the retrieved items
var retrievedItems = {};

// Loop through the item keys
itemKeys.forEach((key) => {
  // Retrieve the item value from local storage
  var itemValue = localStorage.getItem(key);

  // Add the item to the retrievedItems object
  retrievedItems[key] = itemValue;
})

// // Use the retrieved items as needed
console.log(retrievedItems);






// display the current time at the top of the calender
// time blocks for standard 9-5 hours
// color-coded indicating past, present or future
// enter an event on time block
// clicking save saves the event to local storage
// upon refresh, the saved event persists.  

