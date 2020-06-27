//GIVEN I am using a daily planner to create a schedule
// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar
// WHEN I scroll down
// THEN I am presented with time blocks for standard business hours
// WHEN I view the time blocks for that day
// THEN each time block is color-coded to indicate whether it is in the past, present, or future
// WHEN I click into a time block
// THEN I can enter an event
// WHEN I click the save button for that time block
// THEN the text for that event is saved in local storage
// WHEN I refresh the page
// THEN the saved events persist

$(".saveBtn").on("click",function(){
    var userInput = $(this).siblings("textarea").val();
    console.log(userInput);
    var hour = $(this).attr("id");
    console.log(hour);
    var hourNum = hour.split("-")[0];
    console.log(hourNum);
    localStorage.setItem(hourNum, userInput);
})

function getStorage() {
    console.log(localStorage.getItem("9"));
    $("#9-hour").siblings("textarea").val(localStorage.getItem("9"));
    console.log(localStorage.getItem("10"));
    $("#10-hour").siblings("textarea").val(localStorage.getItem("10"));
    console.log(localStorage.getItem("11"));
    $("#11-hour").siblings("textarea").val(localStorage.getItem("11"));
    console.log(localStorage.getItem("12"));
    $("#12-hour").siblings("textarea").val(localStorage.getItem("12"));
    console.log(localStorage.getItem("13"));
    $("#13-hour").siblings("textarea").val(localStorage.getItem("13"));
    console.log(localStorage.getItem("14"));
    $("#14-hour").siblings("textarea").val(localStorage.getItem("14"));
    console.log(localStorage.getItem("15"));
    $("#15-hour").siblings("textarea").val(localStorage.getItem("15"));
    console.log(localStorage.getItem("16"));
    $("#16-hour").siblings("textarea").val(localStorage.getItem("16"));
    console.log(localStorage.getItem("7"));
    $("#17-hour").siblings("textarea").val(localStorage.getItem("17"));
    

    //parse int time for greater/less than current time
    //moment().hour() for current time

}
getStorage();

$("#currentDay").text(moment().format('dddd, MMMM Do, YYYY'));