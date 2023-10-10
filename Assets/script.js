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

$(function() {
  // function to compare time slot hour to current hour
  // then adds past, present, future class element 
  var currentHour = dayjs().hour();
  $('.timeslot').each(function(){
  $('.timeslot').each(function(){
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
  
  $(document).ready(function() {
// get saved inputs from local storage and display in corresponding timeslot
  $('.timeslot').each(function() {

    var timeslot = $(this);
    var timeslotKey = "inputValue" + timeslot.data("timeslot")
    var textarea = timeslot.find("textarea");
    var parsedInput = JSON.parse(localStorage.getItem(timeslotKey));

    console.log(timeslotKey);

    if (parsedInput !== null) {
    timeslot.find('textarea').val(parsedInput);
  }
// save inputs into local storage with unique input keys for each time slot button
  timeslot.find(".saveBtn").on("click", function() {
    var inputValue = timeslot.find("textarea").val();
    localStorage.setItem(timeslotKey, JSON.stringify(inputValue));
  });
// show saved inputs upon refresh
  window.onload = function() {
    if (parsedInput) {
      textarea.textContent = parsedInput;
    }
  }
});
});
