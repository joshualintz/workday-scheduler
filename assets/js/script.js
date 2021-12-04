$(document).ready(function () {
    //Moment.js code for current date and time
    let NowMoment = moment().format("MMMM Do YYYY");
    let displayDate = document.getElementById("currentDay");
    displayDate.innerHTML = NowMoment;
    let currentHour = moment().format("HH");
  
    // Button function to clear local storage and clear contents
    $("#resetBtn").click(function (event) {
      event.preventDefault;
      $("textarea").val("");
      localStorage.clear();
    });
  
    //grabs hour from each time slot and compares it to actual time
    $(".time-div").each(function () {
      var timeDiv = $(this).attr("id").split("-")[1];
      
      if (currentHour == timeDiv) {
        $(this).addClass("present");
        $(this).children(".description").addClass("task-text");
      } else if (currentHour < timeDiv) {
        $(this).removeClass("present");
        $(this).addClass("future");
      } else if (currentHour > timeDiv) {
        $(this).removeClass("future");
        $(this).addClass("past");
      }
    });
  
    //grabs values from time and value divs and saves them to local storage
    $(".saveBtn").click(function (event) {
      event.preventDefault();
      var value = $(this).siblings(".task-block").val();
      var time = $(this).parent().attr("id").split("-")[1];
      localStorage.setItem(time, value);
    });
  
    //retrieves items from local storage and sets them in proper places
    $("#hour-09 .task-block").val(localStorage.getItem("09"));
    $("#hour-10 .task-block").val(localStorage.getItem("10"));
    $("#hour-11 .task-block").val(localStorage.getItem("11"));
    $("#hour-12 .task-block").val(localStorage.getItem("12"));
    $("#hour-13 .task-block").val(localStorage.getItem("13"));
    $("#hour-14 .task-block").val(localStorage.getItem("14"));
    $("#hour-15 .task-block").val(localStorage.getItem("15"));
    $("#hour-16 .task-block").val(localStorage.getItem("16"));
    $("#hour-17 .task-block").val(localStorage.getItem("17"));
  });