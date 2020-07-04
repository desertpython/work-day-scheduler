$(".saveBtn").on("click", function () {
    var userInput = $(this).siblings("textarea").val();
    //   var hourNum = $(this).parent().attr("id");
    // console.log(userInput);
    var hour = $(this).attr("hour");
    console.log(hour);
    //   var hourNum = hour.split("-")[0];
    // console.log(hourNum);
    localStorage.setItem(hour, userInput);
  });
  
  function getStorage() {
    console.log($("#9-hour")[0].children[1].value);
    $("#9-hour")[0].children[1].value = localStorage.getItem("9");
    console.log($("#10-hour")[0].children[1].value);
    $("#10-hour")[0].children[1].value = localStorage.getItem("10");
    console.log($("#11-hour")[0].children[1].value);
    $("#11-hour")[0].children[1].value = localStorage.getItem("11");
    console.log($("#12-hour")[0].children[1].value);
    $("#12-hour")[0].children[1].value = localStorage.getItem("12");
    console.log($("#13-hour")[0].children[1].value);
    $("#13-hour")[0].children[1].value = localStorage.getItem("13");
    console.log($("#14-hour")[0].children[1].value);
    $("#14-hour")[0].children[1].value = localStorage.getItem("14");
    console.log($("#15-hour")[0].children[1].value);
    $("#15-hour")[0].children[1].value = localStorage.getItem("15");
    console.log($("#16-hour")[0].children[1].value);
    $("#16-hour")[0].children[1].value = localStorage.getItem("16");
    console.log($("#17-hour")[0].children[1].value);
    $("#17-hour")[0].children[1].value = localStorage.getItem("17");
  
    //parse int time for greater/less than current time
    //moment().hour() for current time
  }
  getStorage();
  
  $("#currentDay").text(moment().format("dddd, MMMM Do, YYYY"));
  
  //color code box depending on time remaining
  $(".time-block").each(function () {

    var blockHour = parseInt($(this).attr("id").split("-")[0]);
    var currentHour = moment().hours();
  
     console.log(blockHour, currentHour);
    if (blockHour < currentHour) {
      $(this).addClass("past");
      console.log("in the if statement");
    } else if (blockHour === currentHour) {
      $(this).removeClass("past");
      $(this).addClass("present");
      console.log("in the elseif statement");
    } else {
      $(this).removeClass("past");
      $(this).removeClass("present");
      $(this).addClass("future");
      console.log("in the else statement");
    }
  });
  

