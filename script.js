  // Load the HTML and CSS before running the JS
  $(document).ready(function () {

  var displayTimeEl = $('#currentDay');

  function displayTime() {
    var rightNow = dayjs().format('dddd, DD MMMM YYYY, hh:mm:ss a');
    displayTimeEl.text(rightNow);
  }
  displayTime()
 
  // Assign saveBtn click listener for user input and get row id and save to local storage
  $(".saveBtn").on("click", function () {
    var text = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");

    // Save text in local storage
    localStorage.setItem(time, text);
  });

// function to loop over time blocks to retrieve and display data from local storage
function displayText() {
      // Get current number of hours.
      var currentHour = dayjs().hour();
      
      // var blockHour = parseInt($(this).attr("id").split("-")[1]);
    
      // Loop over time blocks
      $(".time-block").each(function () {
        var blockHour = parseInt($(this).attr("id").split("-")[1]);
                 
        // Check the time and add the classes for background indicators
        if (blockHour < currentHour) {
          $(this).addClass("past");
        } else if (blockHour === currentHour) {
          $(this).addClass("present");
        } else {
          $(this).addClass("future");
        }
       
      });
    
  $(".time-block").each(function () {
    var blockHour = $(this).attr("id");
    $(this).children(".description").val(localStorage.getItem(blockHour));
  });
}
displayText();


    //Clear button function for clearing content and local storage
    $("#clearFieldsBtn").click(function(event) {
      event.preventDefault;
      $("textArea").val("");
      localStorage.clear();
  });

});