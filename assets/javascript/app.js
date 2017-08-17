// Initial document.ready function
$(document).ready(function(){

  alert("This Javascript is working.");

  var quiz = {
    time: 180;
    numCorrect: 0;
    numIncorrect: 0;
    numComplete: 0;
    numIncomplete: 0;
    countDown: function(){
      
    }

  }


    // startTimer function() {
    //   $("#startTimer").on("click", ) {
    //     for (i = this.time; i >= 0; i--;)
    //       $("#timer").html("i");
    //   };
    // }


  $("#startTimer").on("click", function() {
    $("#questionaire").removeClass(".hidden");
    $("#introText").addClass(".hidden");
    $("#startTimer").addClass(".hidden");
    quiz.countDown();
  });

});