// Initial document.ready function
$(document).ready(function(){

// An object that hold all of our variables for the quiz
  var quiz = {
    time: 180,
    numCorrect: 0,
    numIncorrect: 0,
    numComplete: 0,
    numIncomplete: 0,
    countDown: function(){
      // timer countdown
    },
    checkTest: function(){
      if ($("input[type='radio'][name=Q1]:checked").val() == "a"){
        this.numCorrect++;
      } else {
        this.numIncorrect++;
      }
      if ($("input[type='radio'][name=Q2]:checked").val() == "a"){
        this.numCorrect++;
      } else {
        this.numIncorrect++;
      }
      if ($("input[type='radio'][name=Q3]:checked").val() == "a"){
        this.numCorrect++;
      } else {
        this.numIncorrect++;
      }
      if ($("input[type='radio'][name=Q4]:checked").val() == "a"){
        this.numCorrect++;
      } else {
        this.numIncorrect++;
      }
      if ($("input[type='radio'][name=Q5]:checked").val() == "a"){
        this.numCorrect++;
      } else {
        this.numIncorrect++;
      }
      if ($("input[type='radio'][name=Q6]:checked").val() == "a"){
        this.numCorrect++;
      } else {
        this.numIncorrect++;
      }
      if ($("input[type='radio'][name=Q7]:checked").val() == "a"){
        this.numCorrect++;
      } else {
        this.numIncorrect++;
      }
      if ($("input[type='radio'][name=Q8]:checked").val() == "a"){
        this.numCorrect++;
      } else {
        this.numIncorrect++;
      }  
      if ($("input[type='radio'][name=Q9]:checked").val() == "a"){
        this.numCorrect++;
      } else {
        this.numIncorrect++;
      }  
      if ($("input[type='radio'][name=Q10]:checked").val() == "a"){
        this.numCorrect++;
      } else {
        this.numIncorrect++;
      }
      $("#correctQ").html("<span>" + this.numCorrect + "</span>");
      $("#incorrectQ").html("<span>" + this.numIncorrect + "</span>");
    }

  }

  $("#startTimer").click(function() {
    alert("This jQuery button is working.");
    $("#questionaire").removeClass("hidden");
    $("#introText").addClass("hidden");
    $("#startTimer").addClass("hidden");
    quiz.countDown();
  });

});