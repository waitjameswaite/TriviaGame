// Initial document.ready function
$(document).ready(function(){

// The list of variables needed for the quiz
  var time = 120;
  var intervalID;

  var numCorrect = 0;
  var numIncorrect = 0;

// Our timer countdown functions
  var countDown = function(){
        intervalID = setInterval(decrement, 1000);
      }

  var decrement = function(){
        time--;
        $("#show-timer").html("<span>" + time + "</span>");
        if (time === 0) {
          checkTest();
        }
      }

// This function will run both when the "time === 0" as well as when the user clicks the "submit" button
  function stopTimer() {
    time = 120;
    $("#show-timer").html("<span>" + time + "</span>");
    clearInterval(intervalID);
  }

// This checks each answer for the correct value, and increments the correct variable by one for an in/correct answer
  var checkTest = function(){
      if ($("input[type='radio'][name=Q1]:checked").val() == "a"){
        numCorrect++;
      } else {
        numIncorrect++;
      }
      if ($("input[type='radio'][name=Q2]:checked").val() == "b"){
        numCorrect++;
      } else {
        numIncorrect++;
      }
      if ($("input[type='radio'][name=Q3]:checked").val() == "c"){
        numCorrect++;
      } else {
        numIncorrect++;
      }
      if ($("input[type='radio'][name=Q4]:checked").val() == "d"){
        numCorrect++;
      } else {
        numIncorrect++;
      }
      if ($("input[type='radio'][name=Q5]:checked").val() == "a"){
        numCorrect++;
      } else {
        numIncorrect++;
      }
      if ($("input[type='radio'][name=Q6]:checked").val() == "b"){
        numCorrect++;
      } else {
        numIncorrect++;
      }
      if ($("input[type='radio'][name=Q7]:checked").val() == "c"){
        numCorrect++;
      } else {
        numIncorrect++;
      }
      if ($("input[type='radio'][name=Q8]:checked").val() == "d"){
        numCorrect++;
      } else {
        numIncorrect++;
      }  
      if ($("input[type='radio'][name=Q9]:checked").val() == "a"){
        numCorrect++;
      } else {
        numIncorrect++;
      }  
      if ($("input[type='radio'][name=Q10]:checked").val() == "b"){
        numCorrect++;
      } else {
        numIncorrect++;
      }
      // After values have been checked, stop the timer, hide the quiz forms, show values for answer, and show "Start Timer" button
      stopTimer();
      $("#quizResults").removeClass("hidden");
      $("#questionaire").addClass("hidden");
      $("#startTimer").removeClass("hidden");
      $("#correctQ").html("<span>" + numCorrect + "</span>");
      $("#incorrectQ").html("<span>" + numIncorrect + "</span>");
    }

  $("#startTimer").click(function() {
    $("#questionaire").removeClass("hidden");
    $("#introText").addClass("hidden");
    $("#startTimer").addClass("hidden");
    $("#quizResults").addClass("hidden");
    // $("input[type='radio']").attr("checked", false);
    // $(".radio input").removeAttr("checked");
    // $(".radio").buttonset("refresh");
    numCorrect = 0;
    numIncorrect = 0;
    countDown();
  });

  $("#submitButton").click(function() {
    checkTest();
    stopTimer();
  });

});