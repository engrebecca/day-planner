const startHour = 9;
const endHour = 17;

// Displays current date at top of planner
$("#currentDay").text(moment().format('dddd, MMMM, Do'));

// Check current time and set timeblock colors
function renderTimeBlocks(){
    const currentHour = moment().hour();
    for (let hour = startHour; hour <= endHour; hour++) {
        const hourStr = (hour % 12 || 12) + (hour < 12 ? "AM" : "PM");
        const timeBlock = $(`<div class="row time-block">`);
        const textArea = $(`<textarea class="col-10 description">`);
        if (hour < currentHour) {
            textArea.addClass("past");
        } else if (hour > currentHour) {
            textArea.addClass("future");
        } else {
            textArea.addClass("present");
        }
        textArea.val(localStorage.getItem(hour) || "");
        const saveBtn = $(
            `<button class="col-1 saveBtn d-flex justify-content-center align-items-center">
                <i class="far fa-save"></i>
            </button>`
        );
        saveBtn.on("click", function(event) {
            event.preventDefault();
            localStorage.setItem(hour, textArea.val());
        });

        timeBlock.append(
            `<span class="col-1 hour">${hourStr}</span>`,
            textArea,
            saveBtn
        )
        $("#time-blocks").append(timeBlock);
    }
}

renderTimeBlocks();
