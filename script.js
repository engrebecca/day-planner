// Displays current date at top of planner
$("#currentDay").text(moment().format('dddd, MMMM, Do'))

// Check current time and set timeblock colors
function setPage(){
    var timeArr = [9,10,11,12,13,14,15,16,17];
    for (var i = 0; i < timeArr.length; i++){
    // if timeArr[i] < current time rounded down (HH), then set respective #id.attr("class", "past")
    // else if timeArr[i] === current time rounded down (HH), then set respective #id.attr("class", "present")
    // else if timeArr set respective #id.attr("class", "future")
    }

    // get object from local storage and JSON parse
    var newArr = [9,10,11,12,13,14,15,16,17]
    for (var i = 0; i < timeArr.length; i++)
    // Access key of object
    eventOb[i + "AM"]
}
// console.log(moment().format("HH"));
// setPage();

// When timeblock clicked, an event/appt can be entered
// $(".eventblock").on("click", function(){
//     console.log("Eventblock clicked");
// })

var eventOb = {};
// When save button clicked, saves event text to local storage
$(".saveBtn").on("click", function(){
    var eventTime = $(this).prev().prev().html();
    console.log(eventTime);
    eventOb[eventTime] = $(this).prev().html();
    console.log(eventOb);

    // use JSON stringify to convert object to string
    localStorage.setItem("event", JSON.stringify(eventOb));
})